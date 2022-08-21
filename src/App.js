import { Header, Footer } from "./components";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
