import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemMagiaDto } from './create-personagem-magia.dto';

export class UpdatePersonagemMagiaDto extends PartialType(CreatePersonagemMagiaDto) {}
