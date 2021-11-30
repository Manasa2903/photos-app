import "./App.css";
import Photos from "./Components/Photos";
import "bootstrap/dist/css/bootstrap.min.css";
import ImagePreview from "./Components/ImagePreview";

function App() {
  return (
    <div className="App">
      <ImagePreview />
      <Photos />
    </div>
  );
}

export default App;
