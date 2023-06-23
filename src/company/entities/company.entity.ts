import { Team } from 'src/team/entities/team.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Company {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  ceo: string;

  @Column()
  address: string;

  @Column({ type: 'date' })
  inceptionDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Team, (team: Team) => team.id)
  teams: Team[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
