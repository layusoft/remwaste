interface ISelectedProductComponentProps {
    setActiveIndex: (index: number) => void;
    activeIndex: number;
    product: ProductType | null;
}

export default function SelectedProductComponent(props: Readonly<ISelectedProductComponentProps>) {
    return (
        props.product &&
        <div className="flex flex-col gap-4 bg-orange-50 h-screen w-[100%]">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                <span className="text-xs text-slate-500 exo-bold">Imagery and information shown throughout this website
                    may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                </span>
                <span className="exo-bold text-pink-400">{props.product.size} Yard Skip</span>
                <div className="flex flex-row items-center gap-2 exo-bold text-sm">
                    <button className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 cursor-pointer" onClick={()=>props.setActiveIndex(1)}>
                        Back
                    </button>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer" onClick={()=>props.setActiveIndex(3)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}