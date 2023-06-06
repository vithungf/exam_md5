import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = () => {
    
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);



    useEffect(() => {
        async function fetData() {
            const data = await axios.get("http://localhost:3000/products")
            setProducts(data.data)
        }

        fetData()
    }, [products]);

    return (
    
        <div>
            {console.log(products)}
            <h1>Products List </h1>
            <button className="btn btn-primary" onClick={() => {
                navigate('/add-new-product')
            }}> Add New Product
            </button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">description</th>
                    <th scope="col-2">action</th>

                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>
                                <Link to={`/products/${product.id}`}
                                >{product.title} </Link></td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => {
                                    navigate('/update-product/'+product.id)}}>Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{navigate('/delete-product/'+product.id)}}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;
