d3.csv("Food_Production.csv").then(function(d) {
    food_data = d;
    // update(data1)
});

ingredients = {
    "wheat-and-rye": [
        {group: "Land use change", value: 0.1},
        {group: "Animal Feed", value: 0},
        {group: "Farm", value: 0.8},
        {group: "Processing", value: 0.2},
        {group: "Transport", value: 0.1},
        {group: "Packging", value: 0.1},
        {group: "Retail", value: 0.1},
        {group: "Total", value: 1.4}
    ],
    "maize": [
        {group: "Land use change", value: 0.3},
        {group: "Animal Feed", value: 0},
        {group: "Farm", value: 0.5},
        {group: "Processing", value: 0.1},
        {group: "Transport", value: 0.1},
        {group: "Packging", value: 0.1},
        {group: "Retail", value: 0.0},
        {group: "Total", value: 1.1}
    ],
    "barley": [
        {group: "Land use change", value: 0.0},
        {group: "Animal Feed", value: 0},
        {group: "Farm", value: 0.2},
        {group: "Processing", value: 0.1},
        {group: "Transport", value: 0.0},
        {group: "Packging", value: 0.5},
        {group: "Retail", value: 0.3},
        {group: "Total", value: 1.1}
    ],
    "oatmeal": [
        {group: "Land use change", value: 0.0},
        {group: "Animal Feed", value: 0},
        {group: "Farm", value: 1.4},
        {group: "Processing", value: 0.0},
        {group: "Transport", value: 0.1},
        {group: "Packging", value: 0.1},
        {group: "Retail", value: 0.0},
        {group: "Total", value: 1.6}
    ],
    "rice": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0},
      {group: "Farm", value: 3.6},
      {group: "Processing", value: 0.1},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.1},
      {group: "Total", value: 4.0}
    ],
    "potatoes": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.3}
    ],
    "cassava": [
      {group: "Land use change", value: 0.6},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.9}
    ],
    "cane-sugar": [
      {group: "Land use change", value: 1.2},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.5},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.8},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 2.6}
    ],
    "beet-sugar": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.0},
      {group: "Processing", value: 0.5},
      {group: "Transport", value: 0.6},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 1.4}
    ],
    "other-pulses": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 1.1},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.4},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 1.6}
    ],
    "peas": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.7},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.79}
    ],
    "nuts": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 2.1},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.2}
    ],
    "groundnuts": [
      {group: "Land use change", value: 0.4},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 1.4},
      {group: "Processing", value: 0.4},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 2.4}
    ],
    "soymilk": [
      {group: "Land use change", value: 0.2},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.1},
      {group: "Processing", value: 0.2},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.3},
      {group: "Total", value: 1}
    ],
    "tofu": [
      {group: "Land use change", value: 1.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.5},
      {group: "Processing", value: 0.8},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.3},
      {group: "Total", value: 3}
    ],
    "soybean-oil": [
      {group: "Land use change", value: 3.1},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 1.5},
      {group: "Processing", value: 0.3},
      {group: "Transport", value: 0.3},
      {group: "Packging", value: 0.8},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 5.99}
    ]
}
 
 // set the dimensions and margins of the graph
 var margin = {top: 30, right: 30, bottom: 70, left: 60},
     width = 660 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;
 
 // append the svg object to the body of the page
 var svg = d3.select("#my_dataviz")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");
 
 // X axis
 var x = d3.scaleBand()
   .range([ 0, width ])
   .domain(ingredients["wheat-and-rye"].map(function(d) { return d.group; }))
   .padding(0.2);
 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x))
 
 // Add Y axis
 var y = d3.scaleLinear()
   .domain([0, 5])
   .range([ height, 0]);
 svg.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y));
 
function onCategoryChanged() {
    var select = d3.select('#categorySelect').node();
    // Get current value of select element
    var category = select.options[select.selectedIndex].value;
    // Update chart with the selected category of letters
    update(category);
}


 // A function that create / update the plot for a given variable:
 function update(category) {
    data = ingredients[category];
    console.log("updated data");
    console.log(ingredients[category]);
    var u = svg.selectAll("rect")
        .data(data)

    u
        .enter()
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
 
 update("wheat-and-rye")
 // Initialize the plot with the first dataset
