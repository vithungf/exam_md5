import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";


const ProductsDetail = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        async function fetData() {
            const data = await axios.get("http://localhost:3000/products/" + id)
            setProductDetail(data.data)
        }
        fetData()
        },[])
    return (
        <div>
            <h1>Product Detail </h1>
            <h3>Product Name: {productDetail.title} </h3>
            <h3>Product Price: {productDetail.price} VND </h3>
            {/* <h3>Product Stock: {productDetail.description} </h3> */}
            <hr/>
            <strong>Description</strong>
            <p>{productDetail.description}</p>
            <button
            onClick={()=>{
                navigate('/')
            }}
            >Back To All Product</button>
        </div>
    );
};

export default ProductsDetail;