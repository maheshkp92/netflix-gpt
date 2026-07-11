import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // UnSubscribe when components unmounts
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex absolute w-screen py-2 px-8 bg-gradient-to-b from-black/80 to-transparent font-black z-10 justify-between">
      <img className="w-44" alt="logo" src={USER_AVATAR} />
      {user && (
        <div className="flex p-2">
          <img
            alt="user-profile-photo"
            className="w-12 h-12"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-black">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
