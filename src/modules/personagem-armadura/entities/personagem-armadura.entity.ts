import { Armadura } from 'src/modules/armadura/entities/armadura.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_armadura' })
export class PersonagemArmadura {
  @PrimaryGeneratedColumn({ name: 'per_armor_id', type: 'int' })
  id: number;

  @Column({ name: 'per_armor_mag_id', type: 'int', nullable: false })
  armaduraId: number;

  @Column({ name: 'per_armor_per_id', type: 'int', nullable: false })
  personagemId: number;

  @ManyToOne(() => Armadura, (armadura) => armadura.personagemArmadura, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'armor_id' })
  armadura: Armadura;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemArmadura, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
