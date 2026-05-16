import { Injectable } from '@nestjs/common';
import { CreateClickhouseDto } from './dto/create-clickhouse.dto';
import { UpdateClickhouseDto } from './dto/update-clickhouse.dto';

@Injectable()
export class ClickhouseService {
  create(createClickhouseDto: CreateClickhouseDto) {
    return 'This action adds a new clickhouse';
  }

  findAll() {
    return `This action returns all clickhouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clickhouse`;
  }

  update(id: number, updateClickhouseDto: UpdateClickhouseDto) {
    return `This action updates a #${id} clickhouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} clickhouse`;
  }
}
