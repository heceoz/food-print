// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 20, left: 70},
    width = 1000 - margin.left - margin.right,
    height = 850 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#your_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .offset([-12, 0])
    .html(function(d) {
        return "<h5>"+d['foodName']+"</h5>";
    });
      svg.call(toolTip);

 // set the dimensions and margins of the graph
 var marginBar = {top: 30, right: 30, bottom: 70, left: 60},
     width = 660 - marginBar.left - marginBar.right,
     height = 860 - marginBar.top - marginBar.bottom;

 // append the svg object to the body of the page
 var svgBar = d3.select("#my_dataviz")
   .append("svg")
     .attr("width", width + marginBar.left + marginBar.right)
     .attr("height", height + marginBar.top + marginBar.bottom)
   .append("g")
     .attr("transform",
           "translate(" + marginBar.left + "," + marginBar.top + ")");

let cleanMap = {};
let xBar;
let yBar;

let total = {};
// Parse the Data
d3.csv("processed_data/id_food_prod.csv", dataPreprocessor, function(data) {
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

  // console.log(nested);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.category)}).keys()
  // console.log(groups)

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
    .domain([0, 175])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
  // color palette = one color per subgroup
  let cat = nested.map(n => n.key);
  var color = d3.scaleOrdinal(d3.schemeCategory10)
    // .domain(cat)
    // .range(['#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a', '#e41a1c','#377eb8','#4daf4a'])

  //stack the data? --> stack per subgroup
  // var stackedData = d3.stack()
  //   .keys(d => d.emissionTot)
  //   (nested)
  //   console.log(stackedData);

  svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width - 200)
  .attr("y", height + 40)
  .text("Categories of food");

  svg.append("text")
     .attr("class", "y label")
     .attr("text-anchor", "end")
     .attr("y", 0)
     .attr("dy", "-3em")
     .attr("transform", "rotate(-90)")
     .text("Greenhouse emissions(Kg CO2)");

  svg.append("text")
     .attr("x", (width / 2))
     .attr("y", 0 - (margin.top / 2))
     .attr("text-anchor", "middle")
     .style("font-size", "16px")
     .style("text-decoration", "underline")
     .text("Total Greenhouse Emissions By Category");

  // Show the bars
  let bargroup = svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(nested)

    let bargroupEnter = bargroup.enter().append("g")
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d.value.food; })
      .enter().append("rect")
      .attr('id', d => d.foodName)
        .attr("x", function(d,i) { return x(d.category);  })
        .attr("y", function(d) { return y(d.next); })
        .attr("height", function(d) { return  y(d.prev) - y(d.next); })
        .attr("width", x.bandwidth())
        .attr("fill", function(d) { return color(d.foodName); })

      bargroupEnter.on('mouseover', toolTip.show)
      .on('mouseout', toolTip.hide);

  bargroup.exit().remove();
})

function dataPreprocessor(row) {
  if (total[row.category]) {
    let temp = total[row.category];
    total[row.category] = total[row.category] + parseFloat(row.Total_emissions);
    return {
      category: row.category,
      foodName: row['Food product'],
      emissionTot: parseFloat(row.Total_emissions),
      prev: temp,
      next: total[row.category]
  };
  } else {
    total[row.category] = parseFloat(row.Total_emissions);
    return {
      category: row.category,
      foodName: row['Food product'],
      emissionTot: parseFloat(row.Total_emissions),
      prev: 0,
      next: total[row.category]
  };
  }
}

d3.csv("processed_data/id_food_prod.csv", function(data) {
  var subgroups = data.columns.slice(1,9);

  clean = data.map(d => {
    datum = dataPrepBar(d, subgroups);
    return datum;
  })

  var select = document.getElementById('categorySelect');
  data.forEach((d,i) => {
    var opt = document.createElement('option');
    console.log(d['Food product'])
    opt.value = d['Food product'];
    opt.innerHTML = d['Food product'];
    select.appendChild(opt);
    cleanMap[d['Food product']] = clean[i];
  })

  console.log(cleanMap);

  // X axis
xBar = d3.scaleBand()
   .range([ 0, width ])
   .domain(cleanMap["Wheat & Rye (Bread)"].map(function(d) { return d.group; }))
   .padding(0.2);

 svgBar.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(xBar))

 // Add Y axis
 yBar = d3.scaleLinear()
   .domain([0, 60])
   .range([ height, 0]);

 svgBar.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(yBar));

  svgBar.append("text")
   .attr("class", "x label")
   .attr("text-anchor", "end")
   .attr("x", width - 200)
   .attr("y", height + 40)
   .text("Categories of greenhouse emissions");

  svgBar.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 0)
    .attr("dy", "-3em")
    .attr("transform", "rotate(-90)")
    .text("Greenhouse emissions(Kg CO2)");

svgBar.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (marginBar.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text("Greenhouse Emissions of Different Ingredients");


 // A function that create / update the plot for a given variable:

 update("Wheat & Rye (Bread)")

})

function onCategoryChanged() {
  var select = d3.select('#categorySelect').node();
  // Get current value of select element
  var category = select.options[select.selectedIndex].value;
  // Update chart with the selected category of letters
  update(category);
}

function update(category) {
  let data = cleanMap[category];
  // console.log("updated data");
  // console.log(ingredients[category]);
  var u = svgBar.selectAll("rect")
      .data(data)

  u.enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("x", function(d) { return xBar(d.group); })
      .attr("y", function(d) { return yBar(d.value); })
      .attr("width", xBar.bandwidth())
      .attr("height", function(d) { return height - yBar(d.value); })
      .attr("fill", "#69b3a2")
}

function dataPrepBar(row, subgroups) {
    let data = [];
    subgroups.map(s => {
        let num = parseFloat(row[s]);
        if (num < 0) {
          num = 0;
        }
        data.push({group: s, value: num})
    })
    return data;

}

