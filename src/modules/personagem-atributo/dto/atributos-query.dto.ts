import { IsInt, IsOptional } from 'class-validator';

export class AtributosQueryDto {
  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  atributoId?: number;

  @IsOptional()
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  personagemId?: number;
}
