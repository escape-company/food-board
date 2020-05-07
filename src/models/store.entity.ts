import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('store')
export default class Store {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
