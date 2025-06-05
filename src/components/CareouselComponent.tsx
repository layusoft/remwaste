
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';

interface ICareouselComponentProps {
    setSelectedProduct: (product: ProductType | null) => void;
    selectedProduct: ProductType | null;
}

export default function CareouselComponent(props: Readonly<ICareouselComponentProps>) {
    const [products, setProducts] = useState<ProductType[]>([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleProductSelect = (product: ProductType) => {
        if (props.selectedProduct?.id === product.id) {
            props.setSelectedProduct(null);
            return;
        }
        props.setSelectedProduct(product);
    };

    const productTemplate = (product: ProductType) => {
        return (
            <div className="shadow-2xl text-center px-3">
                <div className="mb-3 hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden">
                    <img src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${product.size}-yarder-skip.jpg`} alt={product.area}
                        className="shadow-2xl w-full max-h-72 overflow-hidden" />
                </div>
                <div>
                    <h4 className="mb-1 exo-bold text-xl text-pink-500">{product.size} Yard Skip</h4>
                    <h6 className="mt-0 mb-3 exo-regular">14 day hire period</h6>
                    <h6 className="mt-0 mb-3 exo-regular border-b-4 border-pink-200 self-center" >&pound; {product.price_before_vat}</h6>
                    <Button onClick={() => handleProductSelect(product)} label={props.selectedProduct?.id === product.id ? "Selected" : "Select This Skip"}
                        className={`w-full hover:bg-orange-800 exo-bold ${props.selectedProduct?.id === product.id ? "bg-orange-800" : "bg-orange-300"}`} />
                </div>
            </div>
        );
    };

    return (
        <div className="card mt-10">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
