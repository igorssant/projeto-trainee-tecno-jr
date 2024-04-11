import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Nome é um campo obrigatório.' })
  nome: string;

  @IsNotEmpty({ message: 'Senha é um campo obrigatório.' })
  senha: string;
}
