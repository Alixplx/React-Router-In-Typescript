export type Product = {
    
    id: number;
    name: string;
    category: string;
    price: number;  
};
  
export const products: Product[] = [
    
    { id: 1, name: "Keyboard", category: "electronics", price: 50 },
    { id: 2, name: "Mouse", category: "electronics", price: 25 },
    { id: 3, name: "Monitor", category: "electronics", price: 200 },
    { id: 4, name: "React Book", category: "books", price: 30 },
    { id: 5, name: "TypeScript Book", category: "books", price: 40 },
];