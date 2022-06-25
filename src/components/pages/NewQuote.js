import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const onAddQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
