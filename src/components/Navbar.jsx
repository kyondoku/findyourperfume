import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPerfume } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(
      //(user) => {setUser(user);}
      //전달받는 인자와 호출에 전달하는 인자가 같으므로
      //setUser
      (user) => {
        console.log(user);
        setUser(user);
      }
    );
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <TbPerfume />
        <h1>FindYourPerfume</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
