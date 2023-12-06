import axios from "axios";

// const ngrokBaseUrl = "https://your-ngrok-subdomain.ngrok.io"; // Reemplaza con tu subdominio ngrok
// const ngrokAuthToken = "tu_token_de_autenticacion";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // Agrega este encabezado para indicar que se está enviando JSON
  },
  // auth: {
  //   username: "token",
  //   password: "2Z6nT7lF11P7glAI128Dvz3b54g_6LdLbM5zi3E3nx4vjVSgF",
  // },
});
