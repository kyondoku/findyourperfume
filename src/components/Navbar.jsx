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
    <header className="flex justify-between border-b text-white border-gray-300 p-4 bg-black">
      <div>
        <Link
          to="/"
          className="flex items-center text-3xl font-extralight mb-3"
        >
          <h1>TOPELEVEN</h1>
        </Link>
        <div className="space-x-6">
          <Link to="/products/men">남성</Link>
          <Link to="/products/women">여성</Link>
        </div>
      </div>
      <nav className="flex items-center gap-4 font-semibold">
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
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
