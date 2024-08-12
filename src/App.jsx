import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
