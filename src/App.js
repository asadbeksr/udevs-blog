import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import PublishPost from "./pages/PublishPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage replace to="/404" />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:id" element={<Blogs />} />
        <Route exact path="/publish" element={<PublishPost />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
