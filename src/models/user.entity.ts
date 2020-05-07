import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Favorite from './favorite.entity';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'social_id' })
  socialId: string;

  @Column({ name: 'token' })
  token: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(
    _type => Favorite,
    favorite => favorite.user,
  )
  favorites?: Favorite[];
}
