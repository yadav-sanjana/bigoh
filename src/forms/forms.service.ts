import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Form } from './form.model';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class FormsService {
    constructor(
        @InjectModel(Form)
        private formModel: typeof Form,
    ) { }

    async createForm(createFormDto: CreateFormDto | any): Promise<Form | any> {
        return this.formModel.create(createFormDto);
    }
}
