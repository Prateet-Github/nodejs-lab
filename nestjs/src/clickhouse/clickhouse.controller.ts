import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClickhouseService } from './clickhouse.service';
import { CreateClickhouseDto } from './dto/create-clickhouse.dto';
import { UpdateClickhouseDto } from './dto/update-clickhouse.dto';

@Controller('clickhouse')
export class ClickhouseController {
  constructor(private readonly clickhouseService: ClickhouseService) {}

  @Post()
  create(@Body() createClickhouseDto: CreateClickhouseDto) {
    return this.clickhouseService.create(createClickhouseDto);
  }

  @Get()
  findAll() {
    return this.clickhouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clickhouseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClickhouseDto: UpdateClickhouseDto) {
    return this.clickhouseService.update(+id, updateClickhouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clickhouseService.remove(+id);
  }
}
