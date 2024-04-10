import { Module } from '@nestjs/common';
import { AtributoService } from './atributo.service';
import { AtributoController } from './atributo.controller';

@Module({
  controllers: [AtributoController],
  providers: [AtributoService],
})
export class AtributoModule {}
