import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArmaduraDto } from './dto/create-armadura.dto';
import { UpdateArmaduraDto } from './dto/update-armadura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Armadura } from './entities/armadura.entity';

@Injectable()
export class ArmaduraService {
  constructor(
    @InjectRepository(Armadura)
    private armaduraRepository: Repository<Armadura>,
  ) {}

  async create(createArmaduraDto: CreateArmaduraDto) {
    // VERIFICA SE A ARMA JÁ EXISTE
    // SE JÁ EXISTIR NÃO SERÁ CADASTRADA NOVAMENTE
    await this.armaduraJaExisteNoBanco(createArmaduraDto.nome);
    return await this.armaduraRepository.save(createArmaduraDto);
  }

  async findAll() {
    return await this.armaduraRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.armaduraRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Armadura não existe.');
    }
  }

  async update(id: number, updateArmaduraDto: UpdateArmaduraDto) {
    return await this.armaduraRepository.update(id, updateArmaduraDto);
  }

  async remove(id: number) {
    // VERIFICA SE A ARMADURA EXISTE PELO id
    // SE EXISTIR, EXCLUI. CASO CONTRARIO, GERA ERRO
    await this.findOne(id);
    return await this.armaduraRepository.delete(id);
  }

  async findByNome(nome: string) {
    return await this.armaduraRepository.findOneOrFail({
      where: { nome },
      select: [
        'id',
        'nome',
        'preco',
        'bonusClasseDeArmadura',
        'penalidadePorArmadura',
      ],
    });
  }

  async armaduraJaExisteNoBanco(nome: string) {
    const armadura = await this.armaduraRepository.findOne({
      where: { nome },
    });

    if (armadura) {
      throw new BadRequestException('Esta armadura já foi cadastrada.');
    }
  }
}
