import { BrowserRouter } from "react-router-dom";

import { MainRoutes } from "@routes/index";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
