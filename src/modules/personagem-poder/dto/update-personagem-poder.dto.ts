import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemPoderDto } from './create-personagem-poder.dto';

export class UpdatePersonagemPoderDto extends PartialType(CreatePersonagemPoderDto) {}
