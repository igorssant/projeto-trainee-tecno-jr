import { IsInt, IsOptional } from 'class-validator';

export class PoderesQueryDto {
  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  poderId?: number;

  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  personagemId?: number;
}
