import { createBrowserRouter } from "react-router";
import { Root } from "./components/root";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Booking } from "./components/booking";
import { Contact } from "./components/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "booking", Component: Booking },
      { path: "contact", Component: Contact },
    ],
  },
]);
