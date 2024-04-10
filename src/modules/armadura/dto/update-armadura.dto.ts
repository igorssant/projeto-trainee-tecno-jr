import { PartialType } from '@nestjs/mapped-types';
import { CreateArmaduraDto } from './create-armadura.dto';

export class UpdateArmaduraDto extends PartialType(CreateArmaduraDto) {}
