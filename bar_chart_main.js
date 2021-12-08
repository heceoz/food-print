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
    ],
    "palm-oil": [
      {group: "Land use change", value: 3.1},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 2.1},
      {group: "Processing", value: 1.3},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.9},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 7.6}
    ],
    "sunflower-oil": [
      {group: "Land use change", value: 0.1},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 2.1},
      {group: "Processing", value: 0.2},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.9},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 3.5}
    ],
    "rapeseed-oil": [
      {group: "Land use change", value: 0.2},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 2.3},
      {group: "Processing", value: 0.2},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.8},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 3.7}
    ],
    "olive-oil": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 4.3},
      {group: "Processing", value: 0.7},
      {group: "Transport", value: 0.5},
      {group: "Packging", value: 0.9},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 6.0}
    ],
    "tomatoes": [
      {group: "Land use change", value: 0.4},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.7},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 1.4}
    ],
    "onion-leaks": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.3}
    ],
    "root-vegetables": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.3}
    ],
    "brassicas": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.3},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.4}
    ],
    "other-vegetables": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.1},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.5}
    ],
    "citrus-fruit": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.3},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.3}
    ],
    "bananas": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.3},
      {group: "Processing", value: 0.1},
      {group: "Transport", value: 0.3},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.79}
    ],
    "apples": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.2},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.3}
    ],
    "berries-grape": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.7},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 1.09}
    ],
    "wine": [
      {group: "Land use change", value: 0.0},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.6},
      {group: "Processing", value: 0.1},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.7},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 1.4}
    ],
    "other-fruit": [
      {group: "Land use change", value: 0.1},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 0.4},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.0},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 0.7}
    ],
    "coffee": [
      {group: "Land use change", value: 3.7},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 10.4},
      {group: "Processing", value: 0.6},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 1.6},
      {group: "Retail", value: 0.1},
      {group: "Total", value: 16.5}
    ],
    "dark-chocolate": [
      {group: "Land use change", value: 14.3},
      {group: "Animal Feed", value: 0.0},
      {group: "Farm", value: 3.7},
      {group: "Processing", value: 0.2},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.4},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 18.7}
    ],
    "beef-herd": [
      {group: "Land use change", value: 16.3},
      {group: "Animal Feed", value: 1.9},
      {group: "Farm", value: 39.4},
      {group: "Processing", value: 1.3},
      {group: "Transport", value: 0.3},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 59.599}
    ],
    "beef-dairy": [
      {group: "Land use change", value: 0.9},
      {group: "Animal Feed", value: 2.5},
      {group: "Farm", value: 15.7},
      {group: "Processing", value: 1.1},
      {group: "Transport", value: 0.4},
      {group: "Packging", value: 0.3},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 21.09}
    ],
    "lamb-mutton": [
      {group: "Land use change", value: 0.5},
      {group: "Animal Feed", value: 2.4},
      {group: "Farm", value: 19.5},
      {group: "Processing", value: 1.1},
      {group: "Transport", value: 0.5},
      {group: "Packging", value: 0.3},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 24.5}
    ],
    "pork": [
      {group: "Land use change", value: 1.5},
      {group: "Animal Feed", value: 2.9},
      {group: "Farm", value: 1.7},
      {group: "Processing", value: 0.3},
      {group: "Transport", value: 0.3},
      {group: "Packging", value: 0.3},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 7.2}
    ],
    "poultry-meat": [
      {group: "Land use change", value: 2.5},
      {group: "Animal Feed", value: 1.8},
      {group: "Farm", value: 0.7},
      {group: "Processing", value: 0.4},
      {group: "Transport", value: 0.3},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 6.1}
    ],
    "milk": [
      {group: "Land use change", value: 0.5},
      {group: "Animal Feed", value: 0.2},
      {group: "Farm", value: 1.5},
      {group: "Processing", value: 0.1},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.3},
      {group: "Total", value: 2.8}
    ],
    "cheese": [
      {group: "Land use change", value: 4.5},
      {group: "Animal Feed", value: 2.3},
      {group: "Farm", value: 13.1},
      {group: "Processing", value: 0.7},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.3},
      {group: "Total", value: 21.2}
    ],
    "eggs": [
      {group: "Land use change", value: 0.7},
      {group: "Animal Feed", value: 2.2},
      {group: "Farm", value: 1.3},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.2},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 4.5}
    ],
    "fish-farmed": [
      {group: "Land use change", value: 0.5},
      {group: "Animal Feed", value: 0.8},
      {group: "Farm", value: 3.6},
      {group: "Processing", value: 0.0},
      {group: "Transport", value: 0.1},
      {group: "Packging", value: 0.1},
      {group: "Retail", value: 0.0},
      {group: "Total", value: 5.1}
    ],
    "shrimp-farmed": [
      {group: "Land use change", value: 0.2},
      {group: "Animal Feed", value: 2.5},
      {group: "Farm", value: 8.4},
      {group: "Processing", value: 0},
      {group: "Transport", value: 0.2},
      {group: "Packging", value: 0.3},
      {group: "Retail", value: 0.2},
      {group: "Total", value: 11.8}
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
