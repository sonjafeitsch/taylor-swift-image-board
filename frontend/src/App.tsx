import { Button } from "./components/ui/button";
import { useImages } from "./graphql/useImages";

function App() {
  const { images, error } = useImages();

  if (error) {
    return <div>A lot going on at the moment</div>;
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between p-4">
        <h1 className="text-xl">Hello Taylor</h1>
        <Button>Hinzufügen</Button>
      </div>
      <div className="masonry p-4 shrink overflow-auto">
        {images.map((image) => (
          <img
            className="rounded-xl"
            src={image.url}
            key={image.id}
            style={{ width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
