import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Alvos } from 'src/common/enum/Alvos.enum';

export class CreateMagiaDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Custo é obrigatório' })
  custo: number;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Efeito é um campo obrigatório.' })
  efeito: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Dano é um campo obrigatório.' })
  dano: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'área é um campo obrigatório.' })
  area: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Alvo é um campo obrigatório.' })
  @IsEnum(Alvos)
  alvo: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Duração é um campo obrigatório.' })
  duracao: string;
}
