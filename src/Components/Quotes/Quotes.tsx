import React from "react";
import useSlideTimer from "../../Hooks/useSlideTimer";
import type { Quote } from "./_QuotesTypes";

interface Props {
  quotesArr: Quote[];
}

const Quotes: React.FC<Props> = ({ quotesArr = [] }) => {
  const { activeTargetIndex: activeQuoteIndex } = useSlideTimer(
    quotesArr.length,
    7000
  );

  return (
    <div className="quotes _position-relative">
      {quotesArr.length !== 0 ? (
        quotesArr.map((q, index) => {
          return (
            <div
              className={`quote-container${
                index === activeQuoteIndex ? " active" : ""
              }`}
              key={q.quotee}
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
      ) : (
        <div className="quote-container placeholder-quote active">
          <div className="quote">
            <span>“</span>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci.
            </p>
            <span>”</span>
          </div>
          <div className="quotee _text-right">
            <span>-</span>
            Lorem Ipsum
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
