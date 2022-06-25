import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";

const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details Page.</h1>
      <p>{params.quotesId}</p>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
