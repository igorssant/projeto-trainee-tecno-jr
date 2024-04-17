import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemArmaDto } from './create-personagem-arma.dto';

export class UpdatePersonagemArmaDto extends PartialType(
  CreatePersonagemArmaDto,
) {}
