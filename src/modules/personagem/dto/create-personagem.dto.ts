import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Classe } from 'src/common/enum/Classe.enum';
import { Origens } from 'src/common/enum/Origens.enum';
import { Racas } from 'src/common/enum/Racas.enum';

export class CreatePersonagemDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório!' })
  @IsEnum(Racas)
  raca: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório!' })
  @IsEnum(Classe)
  classe: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório!' })
  @IsEnum(Origens)
  origem: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  deus: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Pontos de Vida é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  pontosDeVida: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Pontos de Mana é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  pontosDeMana: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O identificador do Jogador é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  jogadorId: number;
}
