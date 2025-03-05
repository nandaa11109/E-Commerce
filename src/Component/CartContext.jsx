import { createContext, useState } from "react";

// 1️⃣ Buat Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // 2️⃣ Tambah produk ke keranjang
    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            
            if (existingItem) {
                // Jika produk sudah ada, tambahkan jumlahnya
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Jika belum ada, tambahkan ke cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
