import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import React, { useState } from "react";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const updateItems = (newList) => {
    setItems(newList);
    localStorage.setItem("todo_list", JSON.stringify(newList));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    updateItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    updateItems(listItems);
  };

  const deleteItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    updateItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="To do List" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
