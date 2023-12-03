import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./Context/toast";
import { AuthProvider } from "./Context/Auth-context.jsx";
import UserProvider from "./Context/User-context.jsx";
import PostContextProvider from "./Context/Post-context.jsx";
import LoaderProvider from "./Context/LoaderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoaderProvider>
      <ToastProvider>
        <AuthProvider>
          <UserProvider>
            <PostContextProvider>
              <App />
            </PostContextProvider>
          </UserProvider>
        </AuthProvider>
      </ToastProvider>
    </LoaderProvider>
  </BrowserRouter>
);
