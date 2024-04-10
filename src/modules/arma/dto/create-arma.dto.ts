import { Transform } from 'class-transformer';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateArmaDto {
  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Descrição é um campo obrigatório.' })
  descricao: string;

  @IsString({ message: 'Este campo deve ser composto por um texto.' })
  @IsNotEmpty({ message: 'Dano é um campo obrigatório.' })
  dano: string;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Bônus de Ataque é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  bonusAtaque: number = 0;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Bônus de Dano é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  bonusDano: number = 0;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Preço é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  preco: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O campo Peso é obrigatório' })
  @Transform(({ value }) => parseInt(value, 10))
  peso: number = 0;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  itemMagico: boolean = false;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  estaEmpunhando: boolean = false;
}
