import "../App.css";
import BlogList from "../components/BlogList/BlogList";
import Menu from "../components/Menu/Menu";
import History from "../components/History/History";

function App() {
  return (
    <>
      <div className="app-wrap">
        <Menu />
        <History />
        <BlogList />
      </div>
    </>
  );
}

export default App;
