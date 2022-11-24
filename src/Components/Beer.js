import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beersAction } from '../Store/beers-slice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import './Beer.css';

const Beer = (props) => {
  const [like, setLike] = useState(!props.like);
  const shortDescrpition = props.description.slice(0, 450);
  console.log(props);
  const price = props.ibu + '₪';
  const dispatch = useDispatch();

  const addBeerFavorits = () => {
    dispatch(beersAction.addIdToFavorits(props.id));
    setLike(false);
  };
  const removeBeerFavorits = () => {
    dispatch(beersAction.removeIdToFavorits(props.id));
    setLike(true);
  };

  return (
    <div>
      <h3>{props.name}</h3>
      <img
        src={props.image_url}
        alt="Girl in a jacket"
        style={{ height: '100px' }}
      />
      <p>{shortDescrpition}</p>
      <p>{price}</p>
      <div className="favoritsButton">
        {like && (
          <FavoriteIcon onClick={addBeerFavorits} sx={{ color: 'red' }} />
        )}
      </div>
      <div className="favoritsButton">
        {!like && (
          <FavoriteBorderSharpIcon
            onClick={removeBeerFavorits}
            sx={{ color: 'red' }}
          />
        )}
      </div>
    </div>
  );
};
export default Beer;
