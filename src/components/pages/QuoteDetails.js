import { useParams, Route, Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Rubal", text: "Learning React is fun!" },
  { id: "q2", author: "Simranjit", text: "Learning React is Great!" },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quotesId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quotesId}/comments`}>
          Load comments
        </Link>
      </div>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
