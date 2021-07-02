import { ObjectType, Field } from '@nestjs/graphql';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@ObjectType()
@Unique(['email'])
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field(() => [Trivia])
  @ManyToMany(() => Trivia, (trivia) => trivia.admins, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinTable()
  trivias: Trivia[];
}
