import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ProductForm from "./components/productForm/Form/ProductForm";
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
          <ProductForm />
        </div>
      </OpinionsProvider>
    </LanguageProvider>
  );
}

export default App;
