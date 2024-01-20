import "./App.css";
import Footer from "./components/Footer";
import PostMain from "./components/PostMain";
import Header from "./components/Header";
import PostBox from "./components/PostBox";

function App() {
  return (
    <div className="App">
      <PostMain type="" />
      <PostBox />

      <div className="fixed bottom-0 left-0 w-full mb-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
