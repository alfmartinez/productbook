'use strict';

angular.module('productbookApp')
  .factory('Questions', function() {
    function findAnswer(step, expected) {
      return step.answers.find(function(element) {
        return element.value === expected;
      });
    }

    function findNextStep(step, expected) {
      var answer = findAnswer(step, expected);
      return answer ? answer.next : null;
    }

    function addDefaultNextStepToPending(step, subject) {
      subject.pendingInterviews.push(step.next);
    }

    function getNextPending(subject) {
      return subject.pendingInterviews.pop();
    }

    function addAnswersNextStepsToPending(step, subject) {
      var item, answers = subject.answers[step.number];
      for (item in answers) {
        subject.pendingInterviews.push(findNextStep(step, item));
      }
    }

    function processAnswer(step, subject) {
      var nextStep;
      switch (step.type) {
        case 'radio':
          nextStep = findNextStep(step, subject.answers[step.number]);
          break;
        case 'choice':
          addDefaultNextStepToPending(step, subject);
          addAnswersNextStepsToPending(step, subject);
          nextStep = getNextPending(subject);
          break;
        case 'information':
          nextStep = getNextPending(subject);
          break;
        case 'textarea':
        case 'textrows':
        case 'actionabletexttype':
          nextStep = step.next;
          break;
        default:
          throw 'Not Implemented';
      }

      return nextStep;
    }

    return {
      processAnswer: processAnswer
    };
  });
