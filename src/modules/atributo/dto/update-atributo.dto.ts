import { PartialType } from '@nestjs/mapped-types';
import { CreateAtributoDto } from './create-atributo.dto';

export class UpdateAtributoDto extends PartialType(CreateAtributoDto) {}
