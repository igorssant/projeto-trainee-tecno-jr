import { Module } from '@nestjs/common';
import { MagiaService } from './magia.service';
import { MagiaController } from './magia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magia } from './entities/magia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Magia])],
  controllers: [MagiaController],
  providers: [MagiaService],
  exports: [MagiaService],
})
export class MagiaModule {}
