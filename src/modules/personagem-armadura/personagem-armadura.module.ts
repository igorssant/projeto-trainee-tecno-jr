import { Module } from '@nestjs/common';
import { PersonagemArmaduraService } from './personagem-armadura.service';
import { PersonagemArmaduraController } from './personagem-armadura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemArmadura } from './entities/personagem-armadura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemArmadura])],
  controllers: [PersonagemArmaduraController],
  providers: [PersonagemArmaduraService],
  exports: [PersonagemArmaduraService],
})
export class PersonagemArmaduraModule {}
