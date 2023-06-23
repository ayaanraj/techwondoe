import { Company } from 'src/company/entities/company.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Team {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  leadName: string;

  @Column()
  companyId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Company, (company: Company) => company.id)
  @JoinColumn()
  company: Company;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
