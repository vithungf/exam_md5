import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        title:'',
        price:0,
        stock :0,
        description:''
    });

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/products', formData);
            alert("New product has been added successfully");
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("An error occurred while adding the product");
        }
    };

    return (
        <div style={{width: "500px"}}>
            <form className="mb-3" onSubmit={handleOnSubmit}>
                <h1>Add New Product Here</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name </label> <br/>
                    <input type="text" className="product-name" placeholder="Product Name" id="name" name="title"
                    value={formData.title}
                           onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price </label> <br/>
                    <input type="number" className="product-price" placeholder="Product Price" id="price" name="price"
                           value={formData.price}
                           onChange={handleOnChange}/>
                </div>
               
                <label htmlFor="description" className="form-label"> description </label> <br/>
                <textarea  placeholder="Product Description" id="description" name="description"
                           value={formData.description}
                           onChange={handleOnChange}/>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
