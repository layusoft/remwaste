import { useState } from "react";
import CareouselComponent from "./components/CareouselComponent";
import SelectedProductComponent from "./components/SelectedProductComponent";
import StepperComponent from "./components/StepperComponent";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <div className="flex flex-col gap-4 p-4 bg-orange-50 h-screen">
      <StepperComponent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <h1 className="exo-bold text-4xl text-black">Choose Your Skip Size</h1>
      <h1 className="exo-regular text-xs text-slate-500 border-b border-red-400">Select the skip size that best suits your needs</h1>
      <SelectedProductComponent product={selectedProduct} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <div className="shadow-2xl bg-white p-4 rounded-lg">
        <CareouselComponent setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}