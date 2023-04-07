import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://63ef8796271439b7fe70b81b.mockapi.io/users";
const Home = () => {
  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
