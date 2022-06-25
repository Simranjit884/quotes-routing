import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details Page.</h1>
      <p>{params.quotesId}</p>
    </div>
  );
};

export default QuoteDetails;
