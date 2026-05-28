import { Injectable } from '@nestjs/common';
import { CreateNginxDto } from './dto/create-nginx.dto';
import { UpdateNginxDto } from './dto/update-nginx.dto';

@Injectable()
export class NginxService {
  create(createNginxDto: CreateNginxDto) {
    return 'This action adds a new nginx';
  }

  findAll() {
    return `This action returns all nginx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nginx`;
  }

  update(id: number, updateNginxDto: UpdateNginxDto) {
    return `This action updates a #${id} nginx`;
  }

  remove(id: number) {
    return `This action removes a #${id} nginx`;
  }
}
