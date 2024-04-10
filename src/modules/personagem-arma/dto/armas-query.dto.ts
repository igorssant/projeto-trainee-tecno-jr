import { IsInt, IsOptional } from 'class-validator';

export class ArmasQueryDto {
  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  armaId?: number;

  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  personagemId?: number;
}
