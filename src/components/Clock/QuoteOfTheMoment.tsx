import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const QuoteOfTheMoment: React.FC = () => {
  const dispatch = useAppDispatch();
  const quoteText = useAppSelector((state) => state.quoteStore.quoteText);
  const quoteAuthor = useAppSelector((state) => state.quoteStore.quoteAuthor);

  useEffect(() => {
    // CALL TO API (RTK QUERY) TO GET RANDOM INSPIRATIONAL QUOTE
  }, []);

  const handleQuoteClick = () => {
    console.log("Clicked the quote");
  };
  return (
    <figure
      onClick={handleQuoteClick}
      className="hidden lg:flex lg:absolute top-32 left-[50%] -translate-x-[50%] flex-col opacity-40"
    >
      <blockquote>
        <q>{quoteText}</q>
      </blockquote>
      <figcaption>
        &mdash; <em>{quoteAuthor}</em>
      </figcaption>
    </figure>
  );
};

export default QuoteOfTheMoment;
