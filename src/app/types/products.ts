export type Product = {
    id: number;
    slug: string;
    name: string;
    sale_price: number;
    promo_price?: number;
}

export type ProductDetail = {
    id: number;
    slug: string;
    name: string;
    short_description: string;
    long_description: string;
    variants: Variant[]
}

export type Variant = {
    variant_id: number;
    sku: string;
    options: string;
    sale_price: number;
    promo_price?: number;
}

export type APIGetProducts = {
    products: Product[]
}

export type APIGetProductDetail = {
    product: ProductDetail;
}