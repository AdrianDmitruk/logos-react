export type SearchFoodParams = { 
    sortBy: string;
    order: string;
    category: string; 
    search: string;
}

export type Food = {id: string, title: string, price: number, imageUrl: string, description: string, herf: string}

export enum Status {
   LOADING = 'loading',
   SECCESS = 'seccess',
   ERROR = 'error',
}


export interface FoodSliceState {
    items: Food[],
    status: Status,
}