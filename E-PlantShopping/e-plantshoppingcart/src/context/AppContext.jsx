import {useContext, useState} from "react";
import {createContext} from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {
    // ✅ Global States
    const [cartItems, setCartItems] = useState([]); // store added items
    const [showNavbar, setShowNavbar] = useState(false); // control navbar visibility
    const [totalCartItem, setTotalCartItem] = useState(0);
    // ✅ Example function: Add to cart

    // // 🛒 Add item to cart
    // const addToCart = (item) => {
    //     setCartItems((prev) => [...prev, item]);
    //     setTotalCartItem((prev) => prev + 1);
    // };

    // // 🗑 Remove item from cart (optional)
    // const removeFromCart = (index) => {
    //     setCartItems((prev) => prev.filter((_, i) => i !== index));
    //     setTotalCartItem((prev) => Math.max(prev - 1, 0));
    // };

    // Add item or increase quantity
    const addToCart = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i.name === item.name);
            if (existingItem) {
                return prev.map((i) => (i.name === item.name ? {...i, quantity: i.quantity + 1} : i));
            } else {
                return [...prev, {...item, quantity: 1}];
            }
        });
        setTotalCartItem((prev) => prev + 1);
    };

    // Remove one quantity or full item
    const decreaseQuantity = (index) => {
        setCartItems((prev) => {
            const updated = [...prev];
            if (updated[index].quantity > 1) {
                updated[index].quantity -= 1;
            } else {
                updated.splice(index, 1);
            }
            return updated;
        });
        setTotalCartItem((prev) => (prev > 0 ? prev - 1 : 0));
    };

    // Remove full item directly
    const removeFromCart = (index) => {
        setCartItems((prev) => {
            const itemToRemove = prev[index];
            setTotalCartItem((prevCount) => Math.max(prevCount - (itemToRemove?.quantity || 0), 0));
            return prev.filter((_, i) => i !== index);
        });
    };

      const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace("$", ""));
      return total + priceNum * item.quantity;
    }, 0);
  };

    return (
        <AppContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                showNavbar,
                setShowNavbar,
                totalCartItem,
                setTotalCartItem,
                removeFromCart,
                decreaseQuantity,
                getTotalAmount
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
