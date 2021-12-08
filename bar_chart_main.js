 // set the dimensions and margins of the graph
 var margin = {top: 30, right: 30, bottom: 70, left: 60},
     width = 660 - margin.left - margin.right,
     height = 660 - margin.top - margin.bottom;
 
 // append the svg object to the body of the page
 var svg = d3.select("#my_dataviz")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");

let cleanMap = {};
let x;
let y;

d3.csv("processed_data/id_food_prod.csv", function(data) {
  var subgroups = data.columns.slice(1,9);

  clean = data.map(d => {
    datum = dataPreprocessor(d, subgroups);
    return datum;
  })

  data.forEach((d,i) => {
    cleanMap[d['Food product']] = clean[i];
  })

  console.log(cleanMap);

  // X axis
x = d3.scaleBand()
   .range([ 0, width ])
   .domain(cleanMap["Wheat & Rye (Bread)"].map(function(d) { return d.group; }))
   .padding(0.2);

 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x))
 
 // Add Y axis
 y = d3.scaleLinear()
   .domain([0, 10])
   .range([ height, 0]);

 svg.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y));

  svg.append("text")
   .attr("class", "x label")
   .attr("text-anchor", "end")
   .attr("x", width - 200)
   .attr("y", height + 40)
   .text("Categories of greenhouse emmissions");

  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 0)
    .attr("dy", "-3em")
    .attr("transform", "rotate(-90)")
    .text("Greenhouse emmisions(Kg CO2)");

svg.append("text")
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text("Green House Emmissions of Different Ingredients");


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
  var u = svg.selectAll("rect")
      .data(data)

  u.enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", "#69b3a2")
}

function dataPreprocessor(row, subgroups) {
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