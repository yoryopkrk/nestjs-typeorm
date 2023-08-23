import { PrimaryGeneratedColumn, Column, Entity, Index, OneToOne, JoinColumn } from 'typeorm';

import { Customer } from './customer.entity';

@Entity({ name: 'users' })
@Index(['email','customer'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })  
  role: string;

  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
