import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google'; // Importação necessária

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Envolvemos o App com o Provider do Google */}
    {/* Substitua o 'SEU_CLIENT_ID' pelo ID gerado no Google Cloud Console */}
    <GoogleOAuthProvider clientId="SEU_CLIENT_ID_AQUI.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);