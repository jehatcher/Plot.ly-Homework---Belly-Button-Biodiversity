d3.json("samples.json", function(data) {
    console.log(data);
});

var bar = [{
    type: 'bar',
    x: ["otu_ids "],
    y: ['otu_ids '],
    text: ["otu_labels "],
    orientation: 'otu_labels'
  }];
  
  var bubbleData = [{
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      size: sample_values,
      color: otu_ids,
      colorscale: 'Earth'
    }
  }];      

  var bubbleLayout = {
    margin: { t: 0 },
    hovermode: 'closest',
    xaxis: {title: 'OTU ID'},
  };

  Plotly.plot('bubble', bubbleData, bubbleLayout);
