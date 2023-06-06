import './App.css';
import AllProducts from "./page/AllProducts";
import {BrowserRouter , Routes , Route, useParams } from 'react-router-dom'
import ProductsDetail from "./page/ProductsDetail";
import AddProduct from "./page/AddProduct";
import UpdateProduct from "./page/UpdateProduct";
import DeleteProductById from "./page/DeleteProductById";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<AllProducts />} />
                <Route path="/products/:id" element={<ProductsDetail />} />
                <Route path="/delete-product/:id" element={<DeleteProductById />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                <Route path="/add-new-product" element={<AddProduct />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;


