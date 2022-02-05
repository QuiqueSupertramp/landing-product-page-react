import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ProductHeader from "./components/productHeader/ProductHeader";
import ProductInfo from "./components/productInfo/ProductInfo";
import { LanguageProvider } from "./context/LanguageContext";
import { OpinionsProvider } from "./context/OpinionsContext";

function App() {
  return (
    <LanguageProvider>
      <OpinionsProvider>
        <div className="App">
          <NavBar />
          <ProductHeader />
          <ProductInfo />
        </div>
      </OpinionsProvider>
    </LanguageProvider>
  );
}

export default App;
