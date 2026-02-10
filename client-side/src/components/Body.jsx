import React, { useMemo, useState } from "react";
import { campusCanteens } from "../utils/campusData";

const Body = ({ addToCart }) => {
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  const filteredCanteens = useMemo(() => {
    return campusCanteens.filter((canteen) => {
      const matchSearch = canteen.name.toLowerCase().includes(search.toLowerCase());
      if (!matchSearch) {
        return false;
      }

      if (!vegOnly) {
        return true;
      }

      return canteen.items.some((item) => item.veg);
    });
  }, [search, vegOnly]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="rounded-2xl bg-gradient-to-r from-amber-700 to-orange-500 p-6 text-white shadow-lg">
        <h1 className="text-3xl font-bold">CampusCrave - PSIT Food Delivery</h1>
        <p className="mt-2 max-w-2xl text-sm">
          Order from your favorite campus canteens and get your food delivered across hostels,
          classes, and labs.
        </p>
      </section>

      <section className="mt-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow sm:flex-row sm:items-center sm:justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search canteens"
          className="w-full rounded-lg border border-amber-200 px-3 py-2 outline-none focus:border-amber-500 sm:max-w-sm"
        />
        <label className="flex items-center gap-2 text-sm font-medium text-amber-900">
          <input type="checkbox" checked={vegOnly} onChange={() => setVegOnly((prev) => !prev)} />
          Show canteens with veg options
        </label>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCanteens.map((canteen) => (
          <article key={canteen.id} className="rounded-xl bg-white p-4 shadow">
            <div className="mb-3 border-b border-amber-100 pb-3">
              <h2 className="text-lg font-bold text-amber-900">{canteen.name}</h2>
              <p className="text-sm text-gray-600">{canteen.location}</p>
              <p className="mt-1 text-xs text-gray-500">
                {canteen.cuisine} • ⭐ {canteen.rating} • ETA {canteen.eta}
              </p>
            </div>

            <ul className="space-y-2">
              {canteen.items.map((menuItem) => (
                <li key={menuItem.id} className="flex items-center justify-between rounded-lg bg-amber-50 p-2">
                  <div>
                    <p className="font-medium text-amber-950">{menuItem.name}</p>
                    <p className="text-sm text-gray-700">₹{menuItem.price}</p>
                  </div>
                  <button
                    className="rounded-lg bg-amber-700 px-3 py-1 text-sm font-semibold text-white hover:bg-amber-800"
                    onClick={() => addToCart(canteen, menuItem)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Body;
