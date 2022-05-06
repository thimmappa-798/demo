 import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/index'
import {delCart} from '../redux/index'

function Cart() {
  const [product, setProduct] = useState([])
  const state = useSelector((state) => state.HandleCart)

  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch(addCart(product));
  }
  const del=()=>{
    dispatch(delCart(product));
  }
  return (
    <div>
      {
        state && state.map((x) => (
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <img src={x.image} alt={x.title} height="300px" width="200px" />
              </div>
              <div className='col-md-4'>
              
                <p className='lead fw-bold'>
                  {x.qty} X ${x.price}=$ {x.qty} * {x.price} = {x.price}
                </p> 
                
                 <button className='btn btn-outline-dark'onClick={()=>handleButton()}>+</button>
                

               
                </div>
             </div>
            
             </div>
            ))
        
      }

          </div>

        )
    }

      export default Cart