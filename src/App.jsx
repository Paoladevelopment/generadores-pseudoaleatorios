import { RoutesConfiguration } from "./Route/RouteConfiguration";
import { CalculateProvider } from "./context/CalculateContext";

function App() {
  return (
    <CalculateProvider>
      <RoutesConfiguration />
    </CalculateProvider>
  );
}
export default App;
