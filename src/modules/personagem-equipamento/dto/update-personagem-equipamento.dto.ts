import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemEquipamentoDto } from './create-personagem-equipamento.dto';

export class UpdatePersonagemEquipamentoDto extends PartialType(CreatePersonagemEquipamentoDto) {}
