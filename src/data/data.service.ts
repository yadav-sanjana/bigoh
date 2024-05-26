import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Data } from './data.model';
import { FillDataDto } from './dto/fill-data.dto';
import { Form } from '../forms/form.model';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Data)
    private dataModel: typeof Data,
    @InjectModel(Form)
    private formModel: typeof Form,
  ) {}

  async fillData(formTitle: string, fillDataDto: FillDataDto): Promise<Data> {
    const form = await this.formModel.findOne({ where: { title: formTitle } });
    if (!form) {
      throw new Error('Form not found');
    }

    const data = {
      ...fillDataDto,
      formId: form.id,
    };

    return this.dataModel.create(data);
  }

  async getAllData(formTitle: string): Promise<Data[]> {
    const form = await this.formModel.findOne({ where: { title: formTitle } });
    if (!form) {
      throw new Error('Form not found');
    }

    return this.dataModel.findAll({ where: { formId: form.id } });
  }
}
