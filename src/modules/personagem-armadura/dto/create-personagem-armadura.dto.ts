import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePersonagemArmaduraDto {
  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O identificador da Armadura é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  armaduraId: number;

  @IsInt({ message: 'Este campo deve receber um número inteiro' })
  @IsNotEmpty({ message: 'O identificador do Personagem é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  personagemId: number;
}
