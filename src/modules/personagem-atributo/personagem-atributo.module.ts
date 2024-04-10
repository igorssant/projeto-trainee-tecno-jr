import { Module } from '@nestjs/common';
import { PersonagemAtributoService } from './personagem-atributo.service';
import { PersonagemAtributoController } from './personagem-atributo.controller';

@Module({
  controllers: [PersonagemAtributoController],
  providers: [PersonagemAtributoService],
})
export class PersonagemAtributoModule {}
