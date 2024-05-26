import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FormsController } from './forms/forms.controller';
import { FormsService } from './forms/forms.service';
import { DataController } from './data/data.controller';
import { DataService } from './data/data.service';
import { Form } from './forms/form.model';
import { Data } from './data/data.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'form_db',
      autoLoadModels: true,
      synchronize: true,
      models: [Form, Data],
    }),
    SequelizeModule.forFeature([Form, Data]),
  ],
  controllers: [FormsController, DataController],
  providers: [FormsService, DataService],
})
export class AppModule {}
