import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtoCart } from '../redux/CartSlice';
import Navbar from './Navbar';

function Product() {
const products = useSelector(state => state.productStore.productData);
const dispatch = useDispatch()

  const hanlerBuy = (id)=>{
    let buy = products.filter((item)=>item.id === id)
    dispatch(addtoCart(buy))
  }
  return (
    <>
    <Navbar/>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
          gap: '20px', 
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                height: '450px',
                width: '200px',
                border: '1px solid black',
                padding: '10px', // Add some padding for better appearance
              }}
              className='card'
            >
              <div style={{ height: '200px', width: '200px' }}>
                <img
                  style={{ height: '100%', width: '100%' }}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div>
                <h5>{product.title}</h5>
                <h5>Rating: {product.rating.rate}</h5>
              </div>
              <div>
                <h3>${product.price}</h3>
                <button onClick={()=>hanlerBuy(product.id)}>Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>


    </>
  );
}

export default Product;
