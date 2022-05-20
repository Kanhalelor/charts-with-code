google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',55],
  ['France',49],
  ['Spain',54],
  ['USA',24],
  ['Argentina',68]
]);

const options = {
  title:'World Wide Wine Production',
  hAxis: {title: 'Quantity'},
  vAxis: {title: 'Countries'}
};

const chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
  chart.draw(data, options);
}