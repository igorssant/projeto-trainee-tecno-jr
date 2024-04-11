import { Module } from '@nestjs/common';
import { PoderService } from './poder.service';
import { PoderController } from './poder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poder } from './entities/poder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poder])],
  controllers: [PoderController],
  providers: [PoderService],
  exports: [PoderService],
})
export class PoderModule {}
