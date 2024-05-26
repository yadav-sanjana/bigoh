import { Controller, Post, Body } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { FormsService } from './forms.service';

@Controller('form')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  createForm(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createForm(createFormDto);
  }
}
