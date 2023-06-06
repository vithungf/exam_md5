import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:3000/products/" + id);
      setFormData(data.data);
    }
    fetchData();
  }, [id]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:3000/products/" + id, formData);
      alert("Product updated successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the product.");
    }
  };

  return (
    <div style={{ width: "500px" }}>
      <form className="mb-3" onSubmit={handleOnSubmit}>
        <h1>Edit Product</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name{" "}
          </label>{" "}
          <br />
          <input
            type="text"
            className="product-name"
            placeholder="Product Name"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price{" "}
          </label>{" "}
          <br />
          <input
            type="number"
            className="product-price"
            placeholder="Product Price"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleOnChange}
          />
        </div>
        <label htmlFor="description" className="form-label">
          {" "}
          Description{" "}
        </label>{" "}
        <br />
        <textarea
          placeholder="Product Description"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
