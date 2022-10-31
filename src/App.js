import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from './Components/FallBackError';
import errorHandler from './Components/errorHandler';
import Value from './Value';



function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackError} onError={errorHandler}>
      <Value />
      </ErrorBoundary>
    </div>
  );
}

export default App;
