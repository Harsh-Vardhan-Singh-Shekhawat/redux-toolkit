import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { UIActions } from '../../store/SliceUi'; 
const CartButton = (props) => {

  const dispatch = useDispatch();
  const badgeNumber = useSelector(state => state.cart.totalQuantity)
  
  const cartHandler = () => {
    dispatch(UIActions.toggle());
    
  }

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeNumber}</span>
    </button>
  );
};

export default CartButton;
