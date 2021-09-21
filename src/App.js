import React, {useState, useCallback, useEffect} from 'react';
import './App.css';
import {csv} from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/mtiahrt/843efa70f24224397381470e0fc741c2/raw/cssNameColors.csv';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    csv(csvUrl).then(data => {
      console.log('fetching data');
      setData(data);
    })
  }, [])

  const message = data => {
    let message = '';
    message += data.columns.length + ' columns'
    return message;
  }
  return (
    <div className="App">
      Data is: {data ? message(data) : 'loading'}
    </div>
  );
}

export default App;
