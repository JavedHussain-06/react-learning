import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
import { FilterProvider } from "./context/FilterContext";
function App() {
  return (
    <FilterProvider>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="rounded w-full flex justify-between flex-col flex-wrap">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
            <div >
              <TopSellers />
              <PopularBlogs />
            </div>
          </div>
        </div>
      </Router>
    </FilterProvider>
  );
}

export default App;
