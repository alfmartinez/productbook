'use strict';

exports.login = function(agent, theAccount, done) {
  agent
    .post('/auth/local')
    .send(theAccount)
    .expect(200)
    .end(function(err, res) {
      setTimeout(function() {
        if (err) {
          throw err;
        } else {
          agent.saveCookies(res);
          done();
        }
      }, 0);
    });
};
