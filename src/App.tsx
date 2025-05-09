import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import SearchPage from "./pages/SearchPage";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import AlertProvider from "./contexts/AlertProvider";
import FavoritesProvider from "./contexts/FavoritesProvider";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <AlertProvider>
      <FavoritesProvider>
        <div
          id="app"
          className="min-h-[100vh] selection:bg-[var(--theme-color)] selection:text-white"
        >
          <Routes>
            <Route
              path="/"
              element={
                <Nav
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              }
            >
              <Route
                index
                element={
                  <SearchPage
                    searchTerm={searchTerm}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                }
              />
              <Route
                path="home"
                element={
                  <SearchPage
                    searchTerm={searchTerm}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                }
              />
              <Route path="book_details" element={<BookDetails />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
        <Alert />
      </FavoritesProvider>
    </AlertProvider>
  );
}

export default App;
