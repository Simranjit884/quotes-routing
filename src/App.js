import { Route } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetails from "./components/pages/QuoteDetails";

function App() {
  return (
    <div>
      <Route path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quotesId">
        <QuoteDetails />
      </Route>
      <Route path="/new-quotes">
        <NewQuote />
      </Route>
    </div>
  );
}

export default App;
