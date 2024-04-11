import { Module } from '@nestjs/common';
import { PersonagemAtributoService } from './personagem-atributo.service';
import { PersonagemAtributoController } from './personagem-atributo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemAtributo } from './entities/personagem-atributo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemAtributo])],
  controllers: [PersonagemAtributoController],
  providers: [PersonagemAtributoService],
  exports: [PersonagemAtributoService],
})
export class PersonagemAtributoModule {}
