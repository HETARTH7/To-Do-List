import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

import axios from "axios";

const ToDoList = (props) => {
  const [listItem, setListItem] = useState([]);
  
  const viewList = () => {
    return listItem.map((y, index) => {
      return <ToDoItem key={index} item={y} />;
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setListItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea />
      <div>{viewList()}</div>
    </div>
  );
};

export default ToDoList;
