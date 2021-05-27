const dataSource = {
  chart: {
    caption: "Covid-19 Cases",
    yaxisname: "Number of Cases",
    subcaption: "[March 14,2020 - April 19,2020]",
    rotatelabels: "1",
    setadaptiveymin: "5,000",
    theme: "fusion"
  },
  data: [
    {
      label: "14 Mar",
      value: "47"
    },
    {
      label: "15 Jun",
      value: "490"
    },
    {
      label: "6 Sep",
      value: "2,498"
    },
    {
      label: "26 Nov",
      value: "1,382"
    },
    {
      label: "15 Feb",
      value: "1,386"
    },
    {
      label: "9 May",
      value: "7,141"
    },
    {
      label: "22 May",
      value: "6,814"
    },
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "line",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});
