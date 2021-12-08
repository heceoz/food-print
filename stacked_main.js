// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("processed_data/id_food_prod.csv", function(data) {
    console.log(data);
  // List of subgroups = header of the csv files = soil condition here
  // var subgroups = data.columns.slice(1)
  // console.log(subgroups)

  var nested = d3.nest()
  .key(function(d) {
    return d.category;
  })
  .rollup(function(leaves) {
    return {food: leaves};
  })
  .entries(data);

console.log(nested);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.category)}).keys()
  console.log(groups)

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 60])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));
  // color palette = one color per subgroup
  let cat = nested.map(n => n.key);
  var color = d3.scaleOrdinal(d3.schemeCategory10)
    // .domain(cat)
    // .range(['#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a'])

  //stack the data? --> stack per subgroup
  // var stackedData = d3.stack()
  //   .keys(nested.food)
  //   (data)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(nested)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { console.log(d.value.food); return d.value.food; })
      .enter().append("rect")
        .attr("x", function(d,i) { return i  })
        .attr("y", function(d) { if(d.Total_emission !== NaN) { return y(parseFloat(d.Total_emission)); } else {return y(0)} })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())
})

function dataPreprocessor(row) {
  return {
      category: row.category,
      foodName: row['Food product'],
      emissionTot: parseFloat(row.Total_emission)
  };
}