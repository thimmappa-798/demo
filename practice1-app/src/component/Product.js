import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addCart} from '../redux/index'

function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([]);

    const dispatch=useDispatch();
    const addProduct=()=>{
        dispatch(addCart(product));

    }
    
    useEffect(()=>{
        const getProduct=async()=>{
            const {data}=await axios.get(`https:fakestoreapi.com/products/${id}`)
            setProduct( await data)
        }
        getProduct();
    })

  return (
    <div>
        <div className='container py-2 mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="300px" width='300px'/>
                </div>
                <div className='col-md-6'>
                    <h4>{product.category}</h4>
                    <p className='lead'>
                        {product.title}
                    </p>
                    <p className='fw-bold'> Price ${product.price}</p>
                    <p className='fw-bold'>Rating :{product.rating && product.rating.rate}</p>
                    <button onClick={()=>addProduct(product)} className='btn btn-outline-dark'>Add Cart</button>
                    <Link to="/cart"  className='btn btn-outline-dark'>Go To Cart</Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product