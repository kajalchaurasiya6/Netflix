export default function FallbackComponent({ error, resetErrorBoundary }) {
  return (
   <div className="err-container">
     <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
   </div>
  );
}