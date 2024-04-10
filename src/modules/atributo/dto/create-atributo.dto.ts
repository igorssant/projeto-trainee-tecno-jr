import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAtributoDto {
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Força é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  forca: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Destreza é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  destreza: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Constituição é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  constituicao: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Inteligência é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  inteligencia: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Sabedoria é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  sabedoria: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'Carisma é um campo obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  carisma: number;
}
