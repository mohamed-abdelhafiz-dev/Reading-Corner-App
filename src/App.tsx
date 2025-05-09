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

function App() {
  return (
    <AlertProvider>
      <FavoritesProvider>
        <div
          id="app"
          className="min-h-[100vh] selection:bg-[var(--theme-color)]"
        >
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<SearchPage />} />
              <Route path="home" element={<SearchPage />} />
              <Route path="book_details" element={<BookDetails />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
        <Alert/>
      </FavoritesProvider>
    </AlertProvider>
  );
}

export default App;
