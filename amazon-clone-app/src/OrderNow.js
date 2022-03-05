import React from 'react';
import "./OrderNow.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {Link, useNavigate} from 'react-router-dom';
import { db } from './firebase';



function OrderNow() {
  const [{ basket, user}, dispatch] = useStateValue();

  const Push = () => {
    
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .doc('received')
    .set({
      Amount_total: getBasketTotal(basket),
      Basket: basket,
     

    }).catch(alert);

    dispatch({
      type: 'EMPTY_BASKET'
    })
  }

  return( 
  <div className='orderNow'>
      <CurrencyFormat renderText={(value) => (
          <>
          <p>
              Order Total : <strong>{value}</strong>
          </p>
          </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}  
      displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
/>
<Link to ="/orderplaced">
<button onClick={Push}>Buy Now</button>
</Link>

  </div>
  );
}

export default OrderNow;
