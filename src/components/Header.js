import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import CustomIcon from "./UI/CustomIcon";
function Header() {
  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container flex flex-col md:flex-row items-center">
        <h1 className="text-3xl pb-4 md:pb-0">SHOP.</h1>
        <nav className="flex flex-grow justify-end">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="flex items-center">
                <CustomIcon
                  icon={<AiOutlineHome />}
                  size="1.75rem"
                  className="mr-2"
                />
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="flex items-center">
                <CustomIcon
                  icon={<AiOutlineShopping />}
                  size="1.75rem"
                  className="mr-2"
                />
                Shop
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex items-center">
                <CustomIcon
                  icon={<AiOutlineShoppingCart />}
                  size="1.75rem"
                  className="mr-2"
                />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
