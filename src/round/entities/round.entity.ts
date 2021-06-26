import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Question } from 'src/question/entities/question.entity';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import {
  Column,
  Entity,
  ManyToOne,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class Round {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  position: number;

  @ManyToOne(() => Trivia, (trivia) => trivia.rounds)
  trivia: Trivia;

  @ManyToMany(() => Question, (question) => question.rounds)
  @JoinTable()
  questions: Question[];
}
