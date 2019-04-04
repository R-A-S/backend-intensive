import { parents } from '../odm';

export class Parents {
    constructor(data) {
        this.data = data;
    }

    async findAllPupils() {
        const data = await parents.find();

        return data;
    }

    async createPupils() {
        const data = await parents.create();

        return data;
    }
}
