import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Rubal", text: "Learning React is fun!" },
  { id: "q1", author: "Simranjit", text: "Learning React is Great!" },
];

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuote;
