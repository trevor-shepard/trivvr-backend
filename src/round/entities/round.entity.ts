import { ObjectType, Field, Int } from '@nestjs/graphql';
import { QuestionPosition } from 'src/questionPosition/entities/question-position.entity';
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
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  position: number;

  @ManyToOne(() => Trivia, (trivia) => trivia.rounds, {
    cascade: true,
  })
  trivia: Trivia;

  @Field(() => [QuestionPosition], { name: 'questions' })
  @OneToMany(
    () => QuestionPosition,
    (questionPosition) => questionPosition.round,
  )
  public questions!: QuestionPosition[];

  @Field()
  @Column({ default: 'standard' })
  type: 'standard' | 'bonus' | 'music';
}
