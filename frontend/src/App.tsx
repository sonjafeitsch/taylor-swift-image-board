import "./App.css";
import { useImages } from "./graphql/useImages";

function App() {
  const { images, error } = useImages();
  console.log(images);

  return (
    <div className="flex flex-col justify-start gap-4 w-full">
      <h1>Hello Taylor</h1>
      <div className="masonry">
        {images.map((image) => (
          <img src={image.url} key={image.id} style={{ width: "100%" }} />
        ))}
      </div>
    </div>
  );
}

export default App;
