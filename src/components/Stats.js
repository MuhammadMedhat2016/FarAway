export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const itemsNum = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything!! Ready to go"
          : `you have ${itemsNum} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
