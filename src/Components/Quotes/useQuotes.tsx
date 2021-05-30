import { useEffect, useState } from "react";
import { fetchQuotes } from "../../Api/index";

interface Quotes {
  quote: string;
  quotee: string;
}

const useQuotes = () => {
  const [quotesArray, setQuotesArray] = useState<Quotes[]>([]);

  useEffect(() => {
    const getQuotes = async () => {
      const quotes = await fetchQuotes();
      setQuotesArray(quotes);
    };

    getQuotes();
  }, []);

  return {
    quotesArray,
  };
};

export default useQuotes;
