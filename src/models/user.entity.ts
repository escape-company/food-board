import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Favorite from './favorite.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socialId: string;

  @Column()
  token: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(
    _type => Favorite,
    favorites => favorites.user,
  )
  favorites: Favorite[];
}
