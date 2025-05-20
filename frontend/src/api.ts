import axios from "axios";

export async function enviarEntrevista(payload: any) {
  const response = await axios.post("/avaliar", payload);
  return response.data;
}
