var xArray = [2017, 2018, 2019, 2020, 2021, 2022];
var yArray = [689,718,688,699,700,669];

// Define Data

var data = [{
  x:xArray,
  y:yArray,
  mode:"line"
}];

// Define Layout
var layout = {
  xaxis: {range: [2016, 2024], title: "Year"},
  yaxis: {range: [650, 750], title: "Number of Students"},  
  title: "Number of Students/Year"
};

// Display using Plotly
Plotly.newPlot("myLinePlot", data, layout);