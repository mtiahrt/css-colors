import React, {useState, useEffect} from 'react';
import './App.css';
import {csv, arc, pie} from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/mtiahrt/843efa70f24224397381470e0fc741c2/raw/cssNameColors.csv';
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width)

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    csv(csvUrl).then(data => {
      setData(data);
    })
  }, []);

  if(!data){
    return <pre>Loading...</pre>
  }

  return <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      {/* d3 pie function is magic to me.  need to reasearch more */}
      {pie().value(1)(data).map((item, i) => (
        <path fill = {item.data['RGB hex value']}
        d={pieArc(item)}
      />
      ))};
    </g>
  </svg> 
}

export default App;
