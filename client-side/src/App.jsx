import React, { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/Login.jsx";
import LoginSignup from "./components/LoginSignup.jsx";

const AppLayout = ({ cartCount }) => {
  return (
    <div className="app min-h-screen bg-amber-50">
      <Header cartCount={cartCount} />
      <Outlet />
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const addToCart = (canteen, menuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...prev,
        {
          ...menuItem,
          canteen: canteen.name,
          quantity: 1,
        },
      ];
    });
  };

  const clearCart = () => setCartItems([]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout cartCount={cartCount} />,
      children: [
        {
          path: "/",
          element: <Body addToCart={addToCart} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart cartItems={cartItems} clearCart={clearCart} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <LoginSignup />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
