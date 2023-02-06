import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Prediction from "./components/prediction";
// Create a client

function App() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Header />
      <Prediction />
      <ToastContainer autoClose={2000} theme='colored' />
    </div>
  );
}

export default App;
