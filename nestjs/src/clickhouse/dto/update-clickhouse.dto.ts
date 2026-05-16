import { PartialType } from '@nestjs/mapped-types';
import { CreateClickhouseDto } from './create-clickhouse.dto';

export class UpdateClickhouseDto extends PartialType(CreateClickhouseDto) {}
