import React from "react";
import useQuotes from "./useQuotes";
import useSlideTimer from "../../Hooks/useSlideTimer";

const Quotes: React.FC = () => {
  const { quotesArray } = useQuotes();
  const { activeTargetIndex: activeQuoteIndex } = useSlideTimer(
    quotesArray.length,
    7000
  );

  return (
    <div className="quotes _position-relative">
      {}
      {quotesArray.length !== 0
        ? quotesArray.map((q, index) => {
            return (
              <div
                className={`quote-container${
                  index === activeQuoteIndex ? " active" : ""
                }`}
                key={q !== undefined ? q.quotee : ""}
              >
                <div className="quote">
                  <span>“</span>
                  <p>{q.quote}</p>
                  <span>”</span>
                </div>
                <div className="quotee _text-right">
                  <span>-</span>
                  {q.quotee}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Quotes;
