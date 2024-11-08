import { Toaster } from "./components/ui/toaster";
import { MainPage } from "./MainPage";

export function RootLayout() {
  return (
    <div className="flex flex-col h-full w-full">
      <MainPage />
      <Toaster />
    </div>
  );
}
