# Nest.js MySQL Sequelize Example

This project demonstrates how to use Nest.js with MySQL and Sequelize.

## Routes

### Create Form

`POST /form`

Body:
```json
{
  "uniqueld": "uuid",
  "title": "string",
  "name": "string",
  "email": "email",
  "phonenumber": "number",
  "isGraduate": "boolean"
}
