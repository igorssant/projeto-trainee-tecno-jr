import { Magia } from 'src/modules/magia/entities/magia.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_magia' })
export class PersonagemMagia {
  @PrimaryGeneratedColumn({ name: 'per_mag_id', type: 'int' })
  id: number;

  @Column({ name: 'per_mag_mag_id', type: 'int', nullable: false })
  magiaId: number;

  @Column({ name: 'per_mag_per_id', type: 'int', nullable: false })
  personagemId: number;

  @ManyToOne(() => Magia, (magia) => magia.personagemMagia, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'mag_id' })
  magia: Magia;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemArmadura, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
