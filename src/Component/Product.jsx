import { ListProduct } from "../Component/ListProduct";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Component/CartContext"; // Import Context
import {useContext} from "react";
const Product = ({ searchQuery, cartItems, setCartItems }) => {
    const [products, setProducts] = useState(ListProduct);
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); // Ambil fungsi addToCart


    useEffect(() => {
        let filteredProducts = ListProduct;
    
        if (searchQuery) {
          filteredProducts = ListProduct.filter(product =>
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
    
        setProducts(filteredProducts);
      }, [searchQuery]);



  // Fungsi mendapatkan produk yang difilter
  const getFilteredProducts = () => {
    if (filter === "All") {
      const nike = products.filter((p) => p.brand === "Nike").slice(0, 2);
      const adidas = products.filter((p) => p.brand === "Adidas").slice(0, 2);
      const puma = products.filter((p) => p.brand === "Puma").slice(0, 2);
      return [...nike, ...adidas, ...puma]; // Gabungkan 6 produk (2 dari setiap brand)
    } else {
      return ListProduct.filter((product) => product.brand === filter);
    }
  };

  

  return (
    <>
      <div className=" max-w-5xl mx-auto mt-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5 ">
            <h1 className="text-2xl font-medium text-center md:text-left mb-3 md:mb-0">Our Product</h1>
            <div className="flex flex-wrap gap-3 justify-center lg:gap-5">
                <button className={`px-4 py-2 border rounded-lg ${filter === "All" ? "bg-[#003092] text-white" : ""}`} onClick={() => setFilter("All")}>All</button>
                <button className={`px-4 py-2 border rounded-lg ${filter === "Nike" ? "bg-[#003092] text-white" : ""}`} onClick={() => setFilter("Nike")}>Nike</button>
                <button className={`px-4 py-2 border rounded-lg ${filter === "Adidas" ? "bg-[#003092] text-white" : ""}`} onClick={() => setFilter("Adidas")}>Adidas</button>
                <button className={`px-4 py-2 border rounded-lg ${filter === "Puma" ? "bg-[#003092] text-white" : ""}`} onClick={() => setFilter("Puma")}>Puma</button>
        </div>
        </div>


        {/* DAFTAR PRODUK */}
        <div className="grid lg:grid-cols-3  gap-5">
          {getFilteredProducts().map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-slate-900 text-lg font-semibold mt-3">{product.brand}</h3>
              <p className="text-gray-600 text-[14px]">{product.description}</p>
              <p className="text-red-500 font-bold">Rp. {product.price}</p>
              <div className="flex justify-between">
                <button onClick={() => {
                                    addToCart(product); // Tambahkan ke keranjang
                                    navigate("/CartPage"); // Pindah ke CartPage
                                }}
                                className="mt-2 bg-[#003092] text-white px-3 py-2 text-[14px] rounded-md cursor-pointer">Add to Cart</button>
                <button onClick={() => {
                                    addToCart(product); // Tambahkan ke keranjang
                                    navigate("/CheckOut"); // Pindah ke CartPage
                                }}
                className="mt-2 bg-[#ffffff] text-[#003092] px-3 py-1 text-[14px] rounded-md cursor-pointer">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
