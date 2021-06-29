import { Question } from 'src/question/entities/question.entity';
import { Round } from 'src/round/entities/round.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class RoundToQuestion {
  @PrimaryGeneratedColumn()
  public roundToQuestionId!: number;

  @Field(() => Int)
  @Column()
  public position!: number;

  @ManyToOne(() => Question, (question) => question.roundToQuestion, {
    cascade: true,
  })
  public question!: Question;

  @ManyToOne(() => Round, (round) => round.roundToQuestion, {
    cascade: true,
  })
  public round!: Round;
}
