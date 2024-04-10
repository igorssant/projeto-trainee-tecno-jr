import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateEquipamentoDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Descrição é um campo obrigatório.' })
  descricao: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Preço é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  preco: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Peso é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  peso: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  quantidade: number = 1;
}
