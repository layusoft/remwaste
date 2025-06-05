type ProductType = {
    id: string;
    size: number;
    hire_period_days: number;
    transport_cost?: string;
    per_tonne_cost?: string;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    created_at: Date;
    updated_at: Date;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
}