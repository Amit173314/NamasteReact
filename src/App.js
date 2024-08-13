import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";  
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div id="app">
          <Header />
          <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
children: [
  {
    path: "/",
    element: <Body />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
  element: <About />
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />
  }
],
errorElement: <Error />
}



]);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(<RouterProvider router={appRouter} />);
   