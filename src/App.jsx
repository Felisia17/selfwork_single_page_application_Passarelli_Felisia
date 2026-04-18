
import Homepage from "./views/Homepage.jsx";
import Info from "./views/Info.jsx";
import Details from "./views/Details.jsx";
import Layout from "./components/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./assets/router/router.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;



