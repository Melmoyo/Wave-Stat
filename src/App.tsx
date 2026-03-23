import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/Artists";
import Compare from "./pages/Compare";
import Overview from "./pages/Overview";
import TopTracks from "./pages/TopTracks";
import SearchPage from "./pages/SearchPage";

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
          <Route path="/top_tracks" element={<TopTracks />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
