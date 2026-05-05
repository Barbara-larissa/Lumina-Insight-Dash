import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Atualize o caminho aqui para apontar para a nova pasta
import "./styles/modules/index.css"; 
import "./styles/modules/responsivo.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Envolvemos o App com o Provider do Google */}
    <GoogleOAuthProvider clientId="SEU_CLIENT_ID_AQUI.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);