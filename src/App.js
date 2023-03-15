import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import Contact from './pages/Contact'
import Trade from './pages/Trade'
import LiveMarket from './pages/LiveMarket'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/livemarket" element={<LiveMarket />} />
      </Route>
    )
  )

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
