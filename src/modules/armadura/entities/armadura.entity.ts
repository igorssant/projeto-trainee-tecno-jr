import { PersonagemArmadura } from 'src/modules/personagem-armadura/entities/personagem-armadura.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_armadura', orderBy: { id: 'ASC' } })
export class Armadura {
  @PrimaryGeneratedColumn({ name: 'armor_id', type: 'int' })
  id: number;

  @Column({ name: 'armor_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'armor_descricao', type: 'text', nullable: false })
  descricao: string;

  @Column({ name: 'armor_preco', type: 'int', nullable: false, default: 1 })
  bonusClasseDeArmadura: number;

  @Column({ name: 'armor_preco', type: 'int', nullable: false, default: 0 })
  penalidadePorArmadura: number;

  @Column({ name: 'armor_preco', type: 'int', nullable: false })
  preco: number;

  @Column({ name: 'armor_peso', type: 'int', nullable: false, default: 1 })
  peso: number;

  @Column({
    name: 'armor_magico',
    type: 'tinyint',
    nullable: false,
    default: false,
  })
  itemMagico: boolean;

  @Column({
    name: 'armor_trajando',
    type: 'tinyint',
    nullable: false,
    default: false,
  })
  estaTrajando: boolean;

  @OneToMany(
    () => PersonagemArmadura,
    (personagemArmadura) => personagemArmadura.armaduraId,
    { onDelete: 'CASCADE' },
  )
  personagemArmadura: PersonagemArmadura[];
}
