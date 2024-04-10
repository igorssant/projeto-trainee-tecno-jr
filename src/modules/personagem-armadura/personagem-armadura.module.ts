import { Module } from '@nestjs/common';
import { PersonagemArmaduraService } from './personagem-armadura.service';
import { PersonagemArmaduraController } from './personagem-armadura.controller';

@Module({
  controllers: [PersonagemArmaduraController],
  providers: [PersonagemArmaduraService],
})
export class PersonagemArmaduraModule {}
