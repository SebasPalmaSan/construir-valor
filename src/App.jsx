import Router from "./routes/Router";
import { MetadataProvider } from "./utils/MetadataContext";

function App() {
  return (
    <MetadataProvider>
      <Router />
    </MetadataProvider>
  );
}

export default App;