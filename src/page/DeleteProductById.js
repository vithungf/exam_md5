import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

const DeleteProductById = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const data = await axios.get("http://localhost:3000/products/" + id);
            setProductDetail(data.data);
        }
        fetchData();
    },[id]);

    const deleteProduct = (id) => {
        axios.delete("http://localhost:3000/products/" + id);
        alert("Product deleted successfully");
        navigate('/');
    };

    return (
        <div>
            <h1>Product Detail </h1>
            <h3>Product Name: {productDetail.title} </h3>
            <h3>Product Price: {productDetail.price} VND </h3>
            <hr/>
            <strong>Description</strong>
            <p>{productDetail.description}</p>
            <button className="btn btn-danger"
            onClick={() => {
                deleteProduct(id);
            }}
            >Delete</button>
            <button className="btn btn-info"
                    onClick={() => {
                        navigate('/');
                    }}
            >Cancel</button>
        </div>
    );
};

export default DeleteProductById;
