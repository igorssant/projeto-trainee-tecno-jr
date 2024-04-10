import { PersonagemArma } from 'src/modules/personagem-arma/entities/personagem-arma.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_arma', orderBy: { id: 'ASC' } })
export class Arma {
  @PrimaryGeneratedColumn({ name: 'arma_id', type: 'int' })
  id: number;

  @Column({ name: 'arma_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'arma_descricao', type: 'text', nullable: false })
  descricao: string;

  @Column({ name: 'arma_dano', type: 'varchar', length: 50, nullable: false })
  dano: string;

  @Column({ name: 'arma_bonus_atk', type: 'int', nullable: false, default: 0 })
  bonusAtaque: number;

  @Column({ name: 'arma_bonus_dano', type: 'int', nullable: false, default: 0 })
  bonusDano: number;

  @Column({ name: 'arma_preco', type: 'int', nullable: false })
  preco: number;

  @Column({ name: 'arma_peso', type: 'int', nullable: false, default: 1 })
  peso: number;

  @Column({
    name: 'arma_magico',
    type: 'tinyint',
    nullable: false,
    default: false,
  })
  itemMagico: boolean;

  @Column({
    name: 'arma_empunhando',
    type: 'tinyint',
    nullable: false,
    default: false,
  })
  estaEmpunhando: boolean;

  @OneToMany(() => PersonagemArma, (personagemArma) => personagemArma.armaId, {
    onDelete: 'CASCADE',
  })
  personagemArma: PersonagemArma[];
}
