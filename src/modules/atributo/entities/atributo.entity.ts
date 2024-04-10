import { PersonagemAtributo } from 'src/modules/personagem-atributo/entities/personagem-atributo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_atributo', orderBy: { id: 'ASC' } })
export class Atributo {
  @PrimaryGeneratedColumn({ name: 'atr_id', type: 'int' })
  id: number;

  @Column({ name: 'atr_forca', type: 'int', nullable: false })
  forca: number;

  @Column({ name: 'atr_destreza', type: 'int', nullable: false })
  destreza: number;

  @Column({ name: 'atr_constituicao', type: 'int', nullable: false })
  constituicao: number;

  @Column({ name: 'atr_inteligencia', type: 'int', nullable: false })
  inteligencia: number;

  @Column({ name: 'atr_sabedoria', type: 'int', nullable: false })
  sabedoria: number;

  @Column({ name: 'atr_carisma', type: 'int', nullable: false })
  carisma: number;

  @OneToMany(
    () => PersonagemAtributo,
    (personagemAtributo) => personagemAtributo.atributoId,
    { onDelete: 'CASCADE' },
  )
  personagemAtributo: PersonagemAtributo[];
}
