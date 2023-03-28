import { Suspense } from "react";
import { DataProvider } from "./data";
import { Loader, Root } from "./views";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <DataProvider>
        <Root />
      </DataProvider>
    </Suspense>
  );
}

export default App;
