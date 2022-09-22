import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Header from '../components/Header'

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <section><Header/></section>;
}

export default Home;
