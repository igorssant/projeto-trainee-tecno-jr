import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePoderDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Custo é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  custo: number;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Efeito é um campo obrigatório.' })
  efeito: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Dano é um campo obrigatório.' })
  dano: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Área é um campo obrigatório.' })
  area: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Alvo é um campo obrigatório.' })
  alvo: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsOptional()
  duracao: string = 'Instantâneo';
}
