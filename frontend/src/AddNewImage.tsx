import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { useAddImage } from "./graphql/useAddImage";

export function AddNewImage() {
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [createImage] = useAddImage();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    createImage({
      createImageInput: {
        url,
        description: "New image",
      },
    });
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button variant="outline">Hinzufügen</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Neues Bild hinzufügen</DialogTitle>
          <DialogDescription>
            Gib einen Link ein, um ein neues Bild hinzuzufügen:
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Url
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Schließen
            </Button>
          </DialogClose>
          <Button type="submit" className="px-3" onClick={(e) => onSubmit(e)}>
            Hinzufügen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
