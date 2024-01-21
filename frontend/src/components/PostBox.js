function PostBox() {
  const b =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded";
  return (
    <header className="header">
      <div>
        <ul className="px-2 overflow-x-auto mt-2 items-center justify-center flex space-x-3">
          <button className={b}>Alerts</button>
          <button className={b}>Marketplace</button>
          <button className={b}>Services</button>
          <button className={b}>Events</button>
          <button className={b}>Misc.</button>
          <button className={b}>Random</button>
        </ul>
      </div>
    </header>
  );
}

export default PostBox;
