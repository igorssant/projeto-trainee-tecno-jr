import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Poder } from 'src/modules/poder/entities/poder.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_poder' })
export class PersonagemPoder {
  @PrimaryGeneratedColumn({ name: 'per_pod_id', type: 'int' })
  id: number;

  @Column({ name: 'per_pod_pod_id', type: 'int', nullable: false })
  poderId: number;

  @Column({ name: 'per_pod_per_id', type: 'int', nullable: false })
  personagemId: number;

  @ManyToOne(() => Poder, (poder) => poder.personagemPoder, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'mag_id' })
  poder: Poder;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemArmadura, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
