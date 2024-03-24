export class Image {
    id: number;
    imagePath: string;
    altText: string;

    constructor(id: number, imagePath: string, altText: string) {
        this.id = id
        this.imagePath = imagePath
        this.altText = altText
    } 
}