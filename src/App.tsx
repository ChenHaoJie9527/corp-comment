import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import HashtagList from "./layouts/HashtagList";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
