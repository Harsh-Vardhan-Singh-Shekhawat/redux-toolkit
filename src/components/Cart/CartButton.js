import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { UIActions } from '../../store/SliceUi'; 
const CartButton = (props) => {

  const dispatch = useDispatch();
  
  const cartHandler = () => {
    dispatch(UIActions.toggle());
    
  }

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
