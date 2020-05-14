import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import User from './user.entity';

@Entity('favorite')
export default class Favorite {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'store_id' })
  storeId: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(
    _type => User,
    user => user.favorites,
  )
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
