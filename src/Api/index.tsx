import axios from "axios";

const fetchQuotes = async () => {
  const { data } = await axios.get("http://192.168.1.6:8000/olympus/quote");
  return data;
};

export { fetchQuotes };