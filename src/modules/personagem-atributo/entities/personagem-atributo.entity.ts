import { Atributo } from 'src/modules/atributo/entities/atributo.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_personagem_atributo' })
export class PersonagemAtributo {
  @PrimaryColumn()
  atributoId: number;

  @PrimaryColumn()
  personagemId: number;

  @ManyToOne(() => Atributo, (atributo) => atributo.personagemAtributo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'atr_id' })
  atributo: Atributo;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemAtributo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
