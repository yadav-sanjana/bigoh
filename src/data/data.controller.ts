import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { FillDataDto } from './dto/fill-data.dto';

@Controller('fill_data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  fillData(@Query('form_title') formTitle: string, @Body() fillDataDto: FillDataDto) {
    return this.dataService.fillData(formTitle, fillDataDto);
  }

  @Get()
  getAllData(@Query('form_title') formTitle: string) {
    return this.dataService.getAllData(formTitle);
  }
}
