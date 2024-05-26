import { Sequelize } from 'sequelize-typescript';
import { Form } from 'src/forms/form.model';
import { Data } from 'src/data/data.model';


export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'form_db',
    models: [Form, Data],
});
