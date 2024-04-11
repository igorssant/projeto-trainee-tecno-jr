import { Module } from '@nestjs/common';
import { PersonagemMagiaService } from './personagem-magia.service';
import { PersonagemMagiaController } from './personagem-magia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemMagia } from './entities/personagem-magia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemMagia])],
  controllers: [PersonagemMagiaController],
  providers: [PersonagemMagiaService],
  exports: [PersonagemMagiaService],
})
export class PersonagemMagiaModule {}
