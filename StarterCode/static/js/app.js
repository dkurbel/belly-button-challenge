let data = d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json');
    console.log(data);

let sampleOne = [data.samples[0].sample_values];

console.log(sampleOne);

let samples = [];
for (var i = 0; i < data[2].length; i++) {
    samples.push(data[1].sample_values);
};

console.log(samples)

let dropDownButton = d3.select('.selDataset')

var datatrace = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', data);