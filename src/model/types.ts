export interface Categories {
    categoryId : number,
    name : string,
    chiledren : Categories[]
}

export interface Size {
    variantId: string;
    name: string;
    stockQty: number;
}

export interface Result {
    modelId: string;
    name: string;
    type: string;
    sku: string;
    description: string;
    url: string;
    color: string;
    composition: string;
    care: string;
    originalPrice: number;
    finalPrice: number;
    finalPriceType: string;
    currency: string;
    images: string[];
    sizes: Size[];
}

export interface Option {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Filter {
    label: string;
    filterName: string;
    type: string;
    options: Option[];
    min?: number;
    max?: number;
    currency: string;
}

export interface Product {
    results: Result[];
    filters: Filter[];
    resultsCount: number;
}
