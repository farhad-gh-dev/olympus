import axios from "axios";

const fetchQuotes = async () => {
  try {
    const { data } = await axios.get("http://192.168.1.6:8000/olympus/quote");
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

const fetchGodsList = async () => {
  try {
    const { data } = await axios.get("http://192.168.1.6:8000/olympus/gods");
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

const fetchGodInfo = async (godName = "zeus") => {
  try {
    const { data } = await axios.get(
      `http://192.168.1.6:8000/olympus/gods/${godName}`
    );
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

export { fetchQuotes, fetchGodsList, fetchGodInfo };
