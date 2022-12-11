import axios from "axios";

const fetchQuotes = async () => {
  try {
    const { data } = await axios.get(
      "https://apiv10-production.up.railway.app/olympus/quote"
    );
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

const fetchGodsList = async () => {
  try {
    const { data } = await axios.get(
      "https://apiv10-production.up.railway.app/olympus/gods"
    );
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

const fetchGodInfo = async (godName = "zeus") => {
  try {
    const { data } = await axios.get(
      `https://apiv10-production.up.railway.app/olympus/gods/${godName}`
    );
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

export { fetchQuotes, fetchGodsList, fetchGodInfo };
