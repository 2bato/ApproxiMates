import "./App.css";
import Footer from "./components/Footer";
import PostMain from "./components/PostMain";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <PostBox />
      <PostMain 
      type="Service"
      locationType="Exact Location"
      title="Pipe Bursted"
      description="My Name is Andrew Qi Ming Fan and my pipe burst in my basement. I am sad but I love men"/>

        

      
      <div className="fixed bottom-0 left-0 w-full mb-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
