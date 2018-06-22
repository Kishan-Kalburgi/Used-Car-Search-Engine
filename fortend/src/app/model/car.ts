export class Car {

    make: string;
    model: string;
    year: string;
    Type: string;
    features: string;
    purchaseDate: Date;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
