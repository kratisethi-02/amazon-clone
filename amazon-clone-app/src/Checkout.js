import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
 
    return (
      <div className="checkout">
          <div className="checkout__left">
              <img src="https://th.bing.com/th/id/R.c364afe759afca452bbfdbd43d40cbc4?rik=r3BOhu%2bsSenX7A&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f31%2fprime%2fPEX%2fPeX-Top-PC-1500X375.jpg&ehk=niVCn8KTThvOrjsnL6kURXXsNdedwHHW047UdK8B47w%3d&risl=&pid=ImgRaw&r=0" alt="" className="checkout__ad" />
          <div>
             <h2 className='checkout__username'>Hello {user ? user?.email : 'Guest'}</h2>

             <h2 className='checkout__title'> Your Shopping Basket</h2>
             <div className="checkout__product">

             {basket.map(item => (               
                 <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating} />

             ))}
             {/* Checkout Products */}
             {/* Checkout Products */}
             {/* Checkout Products */}
             {/* Checkout Products */}
             </div>
         </div>
         
          </div>

          <div className="checkout__right">
              <Subtotal />
          </div>
      </div>
  ) ;
}

export default Checkout;
