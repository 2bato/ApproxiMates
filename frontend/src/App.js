import "./App.css";
import Footer from "./components/Footer";
import PostMain from "./components/PostMain";
import Header from "./components/Header";
import PopupInput from "./components/PopupInput"
import React from 'react';
import { AuthProvider } from 'react-auth-kit'
import RouteComponent from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      <PostMain
        type="Service"
        locationType="Exact Location"
        title="Pipe Bursted"
        body="My Name is Andrew Qi Ming Fan and my pipe burst in my basement. I am sad but I love men"
      />

      <PopupInput />

      <div className="fixed bottom-0 left-0 w-full mb-3">
        <Footer />
      </div>

      <AuthProvider store={store}>
      <RoutesComponent/>
    </AuthProvider>
    </div>
  );
}

export default App;
