import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/Artists";
import Compare from "./pages/Compare";
import Overview from "./pages/Overview";
import ArtistDetail from "./pages/ArtistDetail";
import SearchPage from "./pages/SearchPage";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className="ml-60 min-h-screen">
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/artists" element={<Artist />}></Route>
          <Route path="/top_tracks" element={<ArtistDetail />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
