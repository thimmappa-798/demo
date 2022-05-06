import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const getProducts = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        setData(data)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        data && data.length > 0 && data.map((product) => (
                            <div className='col-md-3 me-3 py-4'>
                                <div class="card" >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title.substr(0,10)} ...</h5>
                                            <p class="card-text"><h4>${product.price}</h4></p>
                                            <Link to={`/products/${product.id}`} href="#" class="btn btn-primary">BUY NOW</Link>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products