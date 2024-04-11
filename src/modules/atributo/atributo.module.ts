import { Module } from '@nestjs/common';
import { AtributoService } from './atributo.service';
import { AtributoController } from './atributo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atributo } from './entities/atributo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atributo])],
  controllers: [AtributoController],
  providers: [AtributoService],
  exports: [AtributoService],
})
export class AtributoModule {}
