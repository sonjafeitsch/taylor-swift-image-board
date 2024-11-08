import { useSubscription } from "@apollo/client";
import { AddNewImage } from "./AddNewImage";
import { useImages } from "./graphql/useImages";
import { useToast } from "./hooks/use-toast";
import { useEffect } from "react";
import { IMAGE_ADDED } from "./graphql/subscription";

export function MainPage() {
  const { images, error, subscribeToMore } = useImages();
  const { toast } = useToast();
  const { data, loading, errorSubscription } = useSubscription(IMAGE_ADDED);

  // useEffect(() => {
  //   if (data) {
  //     toast({ title: "Ein neues Bild wurde hinzugefügt." });
  //   }
  // }, [data, toast]);

  useEffect(() => {
    subscribeToMore({
      document: IMAGE_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData);
        if (!subscriptionData.data) return prev;

        toast({ title: "Ein neues Bild wurde hinzugefügt." });

        return Object.assign({}, prev, {
          images: [subscriptionData.data.images, ...prev.images],
        });
      },
    });
  }, [subscribeToMore, toast]);

  if (error) {
    return <div>A lot going on at the moment</div>;
  }

  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-xl">Taylor Swift Image Board</h1>
        <AddNewImage />
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
    </>
  );
}
