import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ toggleCart, numOfItemsInCart }) => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={pathname === "/" && "nav-home"}>
        <ul>
          <li>
            <NavLink
              to="/Shopping-Cart/"
              className={({ isActive }) => {
                return isActive ? "isActive" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? "isActive" : "";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-cart" onClick={toggleCart}>
            <div className="cart-icon">
              <FaCartArrowDown />{" "}
              <span data-testid="num-of-items" className="number-of-items">
                {numOfItemsInCart}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
