import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemArmaduraDto } from './create-personagem-armadura.dto';

export class UpdatePersonagemArmaduraDto extends PartialType(CreatePersonagemArmaduraDto) {}
