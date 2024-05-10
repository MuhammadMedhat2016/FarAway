import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./Packagelist";
import Stats from "./Stats";

import "../index.css";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }
  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearlist={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
