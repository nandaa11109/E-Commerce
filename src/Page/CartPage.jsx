import { useNavigate } from "react-router-dom";
import { CartContext } from "../Component/CartContext"; // Import CartContext
import { useContext } from "react";

const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext); // Ambil cartItems dari Context

    return (
        <div className="bg-white min-h-screen max-w-6xl mx-auto p-4 md:p-7">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center mb-6">
                <h1 className="text-2xl md:text-3xl text-black font-bold">My Cart</h1>
                <button 
                    className="border border-black px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition text-sm md:text-base"
                    onClick={() => navigate("/")}
                >
                    Back
                </button>
            </div>

            {/* Table Container for Responsiveness */}
            <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 border-b pb-2 font-semibold text-gray-700 text-center text-sm md:text-base">
                    <div className="col-span-5 text-left">Product</div>
                    <div className="col-span-2 flex items-center justify-center">Price</div>
                    <div className="col-span-2 flex items-center justify-center">Quantity</div>
                    <div className="col-span-3 flex items-center justify-center">Total</div>
                </div>
                
                {cartItems.length > 0 ? (
                    cartItems.map((item) => {
                        const price = Number(item.price.replace(/\./g, "")); // Hapus titik dan ubah ke angka
                        return (
                            <div key={item.id} className="grid grid-cols-12 gap-4 mt-4 items-center border-b pb-2 text-sm md:text-base">
                                <div className="col-span-5 flex items-center text-left">
                                    <img src={item.image} alt="" className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"/>
                                    <div className="ml-4">
                                        <p>{item.brand}</p>
                                        <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                <p className="col-span-2 flex items-center justify-center">Rp {price.toLocaleString("id-ID")}</p>
                                <p className="col-span-2 flex items-center justify-center">{item.quantity}</p>
                                <p className="col-span-3 flex items-center justify-center">Rp {(price * Number(item.quantity)).toLocaleString("id-ID")}</p>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
                )}
            </div>

            {/* Checkout Button */}
            <div className="mt-10 flex justify-end">
                <button onClick={() => navigate("/CheckOut")} className="w-full md:w-auto text-white bg-[#003092] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-[#003092] text-sm md:text-base">
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default CartPage;
