import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export default class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
