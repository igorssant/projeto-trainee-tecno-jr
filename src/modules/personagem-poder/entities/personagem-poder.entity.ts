import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Poder } from 'src/modules/poder/entities/poder.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_personagem_poder' })
export class PersonagemPoder {
  @PrimaryColumn()
  poderId: number;

  @PrimaryColumn()
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
