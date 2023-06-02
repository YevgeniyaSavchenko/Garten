import { useDispatch } from "react-redux";
import MainPage from "../../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { useEffect } from "react";
import { getDiscountAction } from "../../store/reducer/discountReducer";
import AllCategoriesPage from "../../pages/AllCategoriesPage/AllCategoriesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage/ProductDescriptionPage";
import BasketPage from "../../pages/BasketPage/BasketPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
    dispatch(asyncLoadProductsAction);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("discountData");
    if (savedData) {
      dispatch(getDiscountAction(JSON.parse(savedData)));
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDescriptionPage />} />
        <Route path="/products/sale" element={<ProductsPage />} />
        <Route path="/category/:id" element={<ProductsPage />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/cart" element={<BasketPage />} />


      </Routes>
      <Footer />
    </div>
  );
}






export default App;
