import { useState } from "react";
import Item from "./Item";

export default function PackageList({ items, onDeleteItem, onToggleItem, onClearlist }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed") sortedItems = [...items].sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort based on input order</option>
          <option value="description">Sort based on alphabetical order</option>
          <option value="packed">Sort based on pack status order</option>
        </select>
        <button onClick={onClearlist}>clear list</button>
      </div>
    </div>
  );
}
