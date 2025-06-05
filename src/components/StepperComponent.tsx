interface IStepperComponentProps {
    setActiveIndex: (index: number) => void;
    activeIndex: number;
}

export default function StepperComponent(props: Readonly<IStepperComponentProps>) {

    const renderItems = (title: string, icon: string) => {
        return (
            <div className='flex flex-row items-center gap-2 cursor-pointer justify-center exo-bold text-sm shadow-2xl'>
                <span className={icon}></span>
                <span className='exo-bold'>{title}</span>
            </div>
        );
    }


    const items = [
        {
            template: renderItems('PostCode', "pi pi-map-marker"),
            label: 'Post Code',
        },
        {
            template: renderItems('Waste Type', "pi pi-trash"),
        },
        {
            template: renderItems('Select Skip', "pi pi-car"),
        },
        {
            template: renderItems('Permit Check', "pi pi-shield"),
        },
        {
            template: renderItems('Choose Date', "pi pi-sync"),
        },
        {
            template: renderItems('Payment', "pi pi-dollar"),
        }
    ];

    return (
        <div className="card grid md:grid-cols-6 grid-cols-2 justify-content-center gap-5 items-center">
            {
                items.length > 0 &&
                items.map((item, index) => (
                    <div key={index} className={`bg-pink-500 text-white w-full p-2 rounded-lg shadow-md ${index === props.activeIndex && "bg-pink-950 text-white"}`}
                        onClick={() => props.setActiveIndex(index)}>
                        <div>
                            {item.template}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
