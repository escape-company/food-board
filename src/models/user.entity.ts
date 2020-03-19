import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socialId: string;

  @Column()
  token: string;

  @Column()
  filename: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
