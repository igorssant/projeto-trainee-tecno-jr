import { IsInt, IsOptional } from 'class-validator';

export class EquipamentosQueryDto {
  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  equipamentoId?: number;

  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  personagemId?: number;
}
