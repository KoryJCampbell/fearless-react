import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

function App() {

  const [data, setData] = useState({ value: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.countapi.xyz/update/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/?amount=1",
      );
 
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  //update count on button click
  const updateCount = async () => {

    const result = await axios(
      "https://api.countapi.xyz/update/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/?amount=1",
    );

    setData(result.data);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="header-text">
        <h1>Project Purple Cow 🐮</h1>
      </div>
      </header>
      <div>

 {/* Page Count Header */}
<h1>This page has {data.value} views.</h1>


 {/* Update Count Button */}
<div>
  <button className="bg-primary button-class" onClick={updateCount}>
    <i className="fas fa-home"></i> Update Count </button>
</div>
      </div>

    </div>
  );
}



export default App;


