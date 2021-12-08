var svg = d3.select('svg');

// Get layout parameters
var svgWidth = +svg.attr('width');
var svgHeight = +svg.attr('height');

var padding = {t: 60, r: 20, b: 20, l: 20};

// Compute chart dimensions
var cellWidth = 200;
var cellHeight = 200;
var cellPadding = 10;

svg.selectAll('.background')
    .data(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) // dummy data
    .enter()
    .append('rect')
    .attr('class', 'background')
    .attr('width', cellWidth)
    .attr('height', cellHeight)
    .attr('transform', function(d, i) {
        var ty = (i % 2) * (cellHeight + padding.t + padding.b) + padding.t;
        var tx = Math.floor(i / 2) * (cellWidth + padding.l + padding.r) + padding.l;
        return 'translate('+[tx, ty]+')';
    })
    .style("fill", 'white')
    .style("stroke", 'black');


d3.csv('processed_data/id_food_prod.csv').then(function(dataset) {
  console.log(dataset);

  var nested = d3.nest()
    .key(function(d) {
      return d.category;
    })
    .rollup(function(leaves) {
      return {food: leaves};
    })
    .entries(dataset);

  console.log(nested);

  let graphs = svg.selectAll('.graphs')
    .data(nested)
    .enter()
    .append('g')
    .attr('class', 'graph')
    .attr('transform', function(d, i) {
      var ty = (i % 2) * (cellHeight + padding.t + padding.b) + padding.t;
        var tx = Math.floor(i / 2) * (cellWidth + padding.l + padding.r) + padding.l;
        return 'translate('+[tx, ty]+')';
    })


  graphs.append('text')
  .text(function(d) {
    return d.key;
  })
  .attr('class', 'category-label')
  .attr('transform', 'translate(' + ((cellWidth - 15) / 2) + ', ' + '-10)');

  console.log(graphs);
});