import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from './components/ErrorBoundary';
import ColorChanger from "./components/ColorChanger";

function App() {
  return (
    <>
    {/* Exercise 1 */}
    <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
    <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
    <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
    <BuggyCounter />

    {/* Exercise 2 & 3 */}
    <ColorChanger />
    </>
  );
}

export default App;
