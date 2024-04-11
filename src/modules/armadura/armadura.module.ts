import { Module } from '@nestjs/common';
import { ArmaduraService } from './armadura.service';
import { ArmaduraController } from './armadura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Armadura } from './entities/armadura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Armadura])],
  controllers: [ArmaduraController],
  providers: [ArmaduraService],
  exports: [ArmaduraService],
})
export class ArmaduraModule {}
