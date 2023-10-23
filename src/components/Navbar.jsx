import React from "react";
import { Link } from "react-router-dom";
import { TbPerfume } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-4 font-['roboto']">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://simage-kr.uniqlo.com/nq/img/logo_2021.svg"
            alt="logo"
          />
        </Link>
        <div className="ml-10 space-x-6 text-lg font-black">
          <Link to="/products/men">MEN</Link>
          <Link to="/products/women">WOMEN</Link>
        </div>
      </div>
      <nav className="flex items-center gap-4 font-semibold">
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {/* {user && user.isAdmin && ( */}
        {user && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} icon={"CiLogin"} />}
        {user && <Button text={"Logout"} onClick={logout} icon={"CiLogin"} />}
      </nav>
    </header>
  );
}
