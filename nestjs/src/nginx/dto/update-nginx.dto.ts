import { PartialType } from '@nestjs/mapped-types';
import { CreateNginxDto } from './create-nginx.dto';

export class UpdateNginxDto extends PartialType(CreateNginxDto) {}
