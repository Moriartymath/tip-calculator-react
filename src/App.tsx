import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export { App as default };
