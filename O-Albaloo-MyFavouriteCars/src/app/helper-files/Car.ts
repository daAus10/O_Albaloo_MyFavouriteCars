
export interface Car {
    id: number;
    carName: string;
    description: string;
    //maker is type in the instructions
    maker: string;
    imgURL?: string;
    bodyStyle?: string;
    tags?: string[];
}