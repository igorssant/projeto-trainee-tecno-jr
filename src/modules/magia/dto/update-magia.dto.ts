import { PartialType } from '@nestjs/mapped-types';
import { CreateMagiaDto } from './create-magia.dto';

export class UpdateMagiaDto extends PartialType(CreateMagiaDto) {}
