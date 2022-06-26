import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Rubal", text: "Learning React is fun!" },
  { id: "q2", author: "Simranjit", text: "Learning React is Great!" },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quotesId);

  if(!quote) {
    return <p>No quote found!</p>
  }

  return (
    <div>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
