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
      <SelectedProductComponent product={selectedProduct} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <div className="shadow-2xl bg-white p-4 rounded-lg">
        <CareouselComponent setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}