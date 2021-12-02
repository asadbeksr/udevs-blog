import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogList from "./components/BlogList/BlogList";
import Menu from "./components/Menu/Menu";
import History from "./components/History/History";
function App() {
  return (
    <>
      <Header />
      <div className="app-wrap">
        <Menu />
        <History />
        <BlogList />
      </div>
      <Footer />
    </>
  );
}

export default App;
