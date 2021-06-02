import { useEffect, useState } from "react";
import { fetchQuotes } from "../../Api/index";
import type { Quote } from "./_QuotesTypes";

const useQuotes = () => {
  const [quotesArray, setQuotesArray] = useState<Quote[]>([]);

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
