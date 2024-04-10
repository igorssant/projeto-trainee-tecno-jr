import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemAtributoDto } from './create-personagem-atributo.dto';

export class UpdatePersonagemAtributoDto extends PartialType(CreatePersonagemAtributoDto) {}
