import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import NotFound from "./NotFound";

const DUMMY_DATA = [
  { id: "q1", author: "Rubal", text: "Learning React is fun!" },
  { id: "q2", author: "Simranjit", text: "Learning React is Great!" },
];

const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NotFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuote;
