import { Armadura } from 'src/modules/armadura/entities/armadura.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_personagem_armadura' })
export class PersonagemArmadura {
  @PrimaryColumn()
  armaduraId: number;

  @PrimaryColumn()
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
