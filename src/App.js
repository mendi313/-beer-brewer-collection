import './App.css';
import React, { useEffect } from 'react';
import Beers from './Components/Beers';
import { useSelector, useDispatch } from 'react-redux';
import { fatchBeers } from '../src/Store/beers-action';
import { Routes, Route } from 'react-router-dom';
import TabsBar from '../src/Components/TabsBar';
import Favorits from './Components/Favorits';

function App() {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers.beers);

  useEffect(() => {
    dispatch(fatchBeers());
  }, [dispatch]);

  return (
    <div className="App">
      <div style={{ margin: 'auto', width: '100%' }}>
        <TabsBar />
      </div>
      <Routes>
        <Route path="/" element={beers.length && <Beers items={beers} />} />
        <Route path="/favorits"  element= {<Favorits />}/>
      </Routes>
      {/* { beers.lfength && <Beers items={beers} />} */}
    </div>
  );
}

export default App;
