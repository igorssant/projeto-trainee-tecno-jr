import { Injectable } from '@nestjs/common';
import { CreateArmaduraDto } from './dto/create-armadura.dto';
import { UpdateArmaduraDto } from './dto/update-armadura.dto';

@Injectable()
export class ArmaduraService {
  create(createArmaduraDto: CreateArmaduraDto) {
    return 'This action adds a new armadura';
  }

  findAll() {
    return `This action returns all armadura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} armadura`;
  }

  update(id: number, updateArmaduraDto: UpdateArmaduraDto) {
    return `This action updates a #${id} armadura`;
  }

  remove(id: number) {
    return `This action removes a #${id} armadura`;
  }
}
