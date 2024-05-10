import { useState } from "react";


export default function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (!description.trim()) return;
  
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      onAddItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <input placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <button>add</button>
      </form>
    );
  }