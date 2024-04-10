import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePersonagemAtributoDto {
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O identificador do Atributo é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  atributoId: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O identificador do Personagem é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  personagemId: number;
}
