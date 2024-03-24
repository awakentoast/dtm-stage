import { Item } from "./item";
import { Image } from "./image";

export class Product {
    id: number;
    name: string;
    description: string;
    details: string;
    content: string;
    items: Item[];
    images: Image[];

    constructor(
        id: number,
        name: string,
        description: string,
        details: string,
        content: string,
        items: Item[],
        images: Image[]
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.details = details
        this.content = content
        this.items = items
        this.images = images
    } 
}
    
    
