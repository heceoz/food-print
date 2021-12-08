var svg = d3.select('svg');

// Get layout parameters
var svgWidth = +svg.attr('width');
var svgHeight = +svg.attr('height');

var padding = {t: 60, r: 20, b: 20, l: 20};

// Compute chart dimensions
var cellWidth = 200;
var cellHeight = 200;
var cellPadding = 10;

var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

var xScale = d3.scaleBand()
  .range([0, cellWidth])

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

  let cat = nested.map(n => n.key);

  // var xAxis = d3.axisBottom(xScale);
  //   trellises.append('g')
  //   .attr('class', 'x axis')
  //   .attr('transform', 'translate(0,' + trellisHeight + ')')
  //   .call(xAxis);


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

  graphs.append("g")
    .selectAll('.cats')
    .data(function(d) {
      console.log(d);
      return d;
    })
    .enter()
    .append("g")
      .attr("fill", function(d) { return colorScale(d.key); })
      .attr('class', 'cats')
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { console.log(d.value.food); return d.value.food; })
      .enter().append("rect")
        .attr("x", function(d,i) { return i  })
        .attr("y", function(d) {
          return y(d.emissionTot);
        })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", 20)

  // Add X axis
  graphs.append("g")
  .attr("transform", "translate(0," + cellHeight + ")")
  .call(function(d) {
    console.log(nested)
    return d3.axisBottom(setScale(d)).tickSizeOuter(0)
  });

  setScale(graphs);

  // Add Y axis
  var y = d3.scaleLinear()
  .domain([0, 60])
  .range([ cellHeight, 0 ]);
  svg.append("g")
  .call(d3.axisLeft(y));


  graphs.append('text')
  .text(function(d) {
    return d.key;
  })
  .attr('class', 'category-label')
  .attr('transform', 'translate(' + ((cellWidth - 15) / 2) + ', ' + '-10)');

  console.log(graphs);
});

function dataPreprocessor(row) {
  return {
      category: row.category,
      foodName: row['Food product'],
      emissionTot: parseFloat(row.Total_emission)
  };
}

function setScale(graph) {
  console.log(graph)
  // let x = xScale.domain(domainVal)
  // .padding([0.2])
  // return x;
}