import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">Master Headphones</Link>
        <br />
      </div>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
