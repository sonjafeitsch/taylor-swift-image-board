import { useSubscription } from "@apollo/client";
import { AddNewImage } from "./AddNewImage";
import { useImages } from "./graphql/useImages";
import { IMAGE_ADDED } from "./graphql/subscription";
import { useToast } from "./hooks/use-toast";
import { useEffect } from "react";

export function MainPage() {
  const { images, error, subscribeToMore } = useImages();
  const { data, loading } = useSubscription(IMAGE_ADDED);
  const { toast } = useToast();

  // useEffect(() => {
  //   toast({
  //     title: "Neues Bild hinzugefügt",
  //     description: "Ein neues Bild wurde hinzugefügt",
  //   });
  // }, [data]);

  useEffect(() => {
    subscribeToMore({
      document: IMAGE_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData.data);
        if (!subscriptionData.data) return prev;
        const newImage = subscriptionData.data.images;

        if (subscriptionData.data.images) {
          toast({ title: "Es wurde ein neues Bild hinzugefügt" });
        }

        return Object.assign({}, prev, {
          post: {
            comments: [newImage, ...prev.images],
          },
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
