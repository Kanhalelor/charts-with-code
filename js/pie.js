google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Botswana',54.8],
  ['Zambia',48.6],
  ['Namibia',44.4],
  ['Angola',23.9],
  ['Kenya',14.5]
]);

var options = {
  title:'SADC Mining Production'
};

var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  chart.draw(data, options);
}