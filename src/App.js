import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";  
import RestaurantMenu from "./components/RestaurantMenu";
import React, { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Amit");
    return (
        <div id="app">
          <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
          <Header />
          <Outlet />
          </UserContext.Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        )
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
   