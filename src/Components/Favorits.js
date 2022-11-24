import { useSelector } from 'react-redux';
import Beers from './Beers';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { beersAction } from '../Store/beers-slice';
import './Favorits.css';

const Favorits = () => {
  const beers = useSelector((state) => state.beers.beers);
  const selectedBeersIds = useSelector((state) => state.beers.favorits);
  let favorits = beers.filter((beer) => selectedBeersIds.includes(beer.id));
  let exsistFavorits = selectedBeersIds.length ? true : false;
  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(beersAction.removeAllFromFavorits());
  };

  return (
    <div>
      {exsistFavorits && (
        <div className="removeButton">
          <Button
            variant="outlined"
            onClick={removeAll}
            startIcon={<DeleteIcon />}
          >
            Delete All
          </Button>
        </div>
      )}
      <Beers items={favorits} like={true} />
      {!exsistFavorits && <h3>לא קיימים פריטים</h3>}
    </div>
  );
};

export default Favorits;
