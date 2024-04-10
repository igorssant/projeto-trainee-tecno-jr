import { Module } from '@nestjs/common';
import { PersonagemMagiaService } from './personagem-magia.service';
import { PersonagemMagiaController } from './personagem-magia.controller';

@Module({
  controllers: [PersonagemMagiaController],
  providers: [PersonagemMagiaService],
})
export class PersonagemMagiaModule {}
