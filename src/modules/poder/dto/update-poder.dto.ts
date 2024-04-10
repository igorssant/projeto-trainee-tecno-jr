import { PartialType } from '@nestjs/mapped-types';
import { CreatePoderDto } from './create-poder.dto';

export class UpdatePoderDto extends PartialType(CreatePoderDto) {}
