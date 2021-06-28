import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RoundToQuestion } from 'src/round-to-question/entities/round-to-question.entity';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => RoundToQuestion, (roundToQuestion) => roundToQuestion.round)
  public roundToQuestion!: RoundToQuestion[];
}
