import "./App.css";
import { useImages } from "./graphql/useImages";

function App() {
  const { images, error } = useImages();
  console.log(images);

  return (
    <>
      <h1>Hello Taylor</h1>
    </>
  );
}

export default App;
