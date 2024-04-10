import { Transform } from 'class-transformer';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateArmaduraDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Descrição é um campo obrigatório.' })
  descricao: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Bônus em Classe de Armadura é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  bonusClasseDeArmadura: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Penalidade por Armadura é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  penalidadePorArmadura: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Preço é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  preco: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Peso é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  peso: number;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  itemMagico: boolean = false;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  estaTrajando: boolean = false;
}
