import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import User from './user.entity';

@Entity()
export default class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  storeId: number;

  @Column()
  createdAt: Date;

  @ManyToOne(
    _type => User,
    user => user.favorites,
  )
  @JoinColumn({ name: 'user_id' })
  user: User;
}
