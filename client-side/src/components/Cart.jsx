import React, { useMemo } from "react";

const Cart = ({ cartItems, clearCart }) => {
  const grandTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-amber-900">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 rounded-lg bg-white p-4 text-gray-700 shadow">
          Your cart is empty. Add items from canteens to place an order.
        </p>
      ) : (
        <>
          <div className="mt-4 space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
                <div>
                  <p className="font-semibold text-amber-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.canteen}</p>
                </div>
                <p className="text-sm text-gray-700">
                  {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-amber-100 p-4">
            <p className="text-lg font-bold text-amber-900">Total: ₹{grandTotal}</p>
            <button
              className="mt-3 rounded-lg bg-amber-700 px-4 py-2 font-semibold text-white hover:bg-amber-800"
              onClick={clearCart}
            >
              Place order
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
