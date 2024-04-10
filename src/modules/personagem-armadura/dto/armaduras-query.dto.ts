import { IsInt, IsOptional } from 'class-validator';

export class ArmadurasQueryDto {
  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  armaduraId?: number;

  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  personagemId?: number;
}
