export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding items 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything and ready to go ✈"
          : `👜 You have ${numItems} items on your list, and you alraedy packed
        ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}
