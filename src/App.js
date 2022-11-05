import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import FallbackError from "./Components/FallBackError";
import errorHandler from "./Components/errorHandler";
import Home from "./Components/Home";
import Users from "./Components/Users";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackError} onError={errorHandler}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
