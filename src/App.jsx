import "react-toastify/dist/ReactToastify.css";
import TaskBoardPage from "./pages/TaskBoardPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <TaskBoardPage />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
