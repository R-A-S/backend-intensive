import { Classes as ClassesModel } from '../models';

export class Classes {
    constructor(data) {
        this.models = {
            classes: new ClassesModel(data),
        };
    }

    async create() {
        const data = await this.models.classes.create();

        return data;
    }

    async findById() {
        const data = await this.models.classes.findById();

        return data;
    }

    async createByClassId() {
        const data = await this.models.classes.createByClassId();

        return data;
    }
}
