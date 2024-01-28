import {React, useEffect, useState } from 'react'
import { UserProver } from "./context/AddUserContext";
// import { auth } from "./utils/firebase";
import { Outlet, useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

function App() {

  let [user] = useState()

  return (
    <>
      <UserProver value={{ user }}>
        <Outlet/>
      </UserProver>
    </>
  )
}

export default App