import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateJogadorDto {
  @IsString({ message: 'Nome deve ser uma String.' })
  @IsNotEmpty({ message: 'Nome é um campo obrigatório!' })
  nome: string;

  @IsString({ message: 'Senha deve ser uma String.' })
  @IsNotEmpty({ message: 'Senha é um campo obrigatório!' })
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
  })
  senha: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  mestre: boolean = false;
}
