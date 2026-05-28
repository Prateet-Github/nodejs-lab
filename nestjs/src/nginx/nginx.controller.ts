import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NginxService } from './nginx.service';
import { CreateNginxDto } from './dto/create-nginx.dto';
import { UpdateNginxDto } from './dto/update-nginx.dto';

@Controller('nginx')
export class NginxController {
  constructor(private readonly nginxService: NginxService) {}

  @Post()
  create(@Body() createNginxDto: CreateNginxDto) {
    return this.nginxService.create(createNginxDto);
  }

  @Get()
  findAll() {
    return this.nginxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nginxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNginxDto: UpdateNginxDto) {
    return this.nginxService.update(+id, updateNginxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nginxService.remove(+id);
  }
}
