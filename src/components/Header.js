import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user, " user");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex absolute w-screen py-2 px-8 bg-gradient-to-b font-black z-10 justify-between">
      <img
        className="w-44"
        alt="logo"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-black">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
