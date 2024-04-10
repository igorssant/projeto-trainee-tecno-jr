import { Magia } from 'src/modules/magia/entities/magia.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_personagem_magia' })
export class PersonagemMagia {
  @PrimaryColumn()
  magiaId: number;

  @PrimaryColumn()
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
