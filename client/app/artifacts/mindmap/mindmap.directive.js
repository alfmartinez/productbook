'use strict';

angular.module('productbookApp')
  .directive('mindmap', function() {
    return {
      templateUrl: 'app/artifacts/mindmap/mindmap.html',
      restrict: 'EA',
      scope: {
        model: '=model',
        width: '=width',
        height: '=height'
      },
      link: function(scope, element, attrs) {
        var m = [20, 20, 20, 120],
          h = scope.height - m[0] - m[2],
          w = scope.width - m[1] - m[3],
          i = 0;

        function updateTree(root) {
          var tree = d3.layout.tree().size([h, w]);
          root = scope.model;
          root.x0 = h / 2;
          root.y0 = 0;
          var nodes = tree.nodes(root);
          nodes.forEach(function(d) {
            d.y = d.depth * 180;
          });
          var diagonal = d3.svg.diagonal().projection(function(d) {
            return [d.y, d.x];
          });
          var vis = d3.select(element[0])
            .style("background-color", "lightgray")
            .append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
            .append("svg:g").attr("transform", "translate(" + m[3] +
              "," + m[
                0] + ")");
          var i = 0;
          var node = vis.selectAll("g.node")
            .data(nodes, function(d) {
              return d.id || (d.id = ++i);
            });
          var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) {
              return "translate(" + root.y0 + "," + root.x0 + ")";
            });
          nodeEnter.append("svg:circle")
            .attr("r", function(d) {
              return d.radius;
            })
            .attr("class", function(d) {
              return d.class;
            });
          nodeEnter.append("svg:text")
            .attr("dy", ".35em")
            .attr("x", function(d) {
              return d.children || d._children ? -10 : 10;
            })
            .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
              return d.name;
            })
          var nodeUpdate = node.transition()
            .duration(1)
            .attr("transform", function(d) {
              return "translate(" + d.y + "," + d.x + ")";
            });
          var link = vis.selectAll("path.link")
            .data(tree.links(nodes), function(d) {
              return d.target.id;
            });
          link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
              var o = {
                x: root.x0,
                y: root.y0
              };
              return diagonal({
                source: o,
                target: o
              });
            })
            .transition()
            .duration(1)
            .attr("d", diagonal);
        }

        scope.$watch('model', function(root) {
          if (root) updateTree(root);
        });

      }
    };
  });
