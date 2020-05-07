import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;
}
