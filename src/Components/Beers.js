import React from 'react';
import Beer from './Beer';
import { useSelector } from 'react-redux';
import './Beers.css';

const Beers = (props) => {

  const selectedBeersIds = useSelector((state) => state.beers.favorits);
  return (
    <div>
      <div className="card-container">
        {props.items.map((beer) => {
          return (
            <div key={beer.id} className="card">
              <Beer
                className="card-container"
                {...beer}
                like={selectedBeersIds.includes(beer.id) ? true : false}
                key={beer.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Beers;
