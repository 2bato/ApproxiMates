import "./Filter.css";

function FilterButtons() {
  const b =
    "bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded";
  return (
    <header className="header pt-20">
      <div>
        <ul className="px-2 overflow-x-auto justify-center mt-2 items-center flex space-x-3">
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

export default FilterButtons;
