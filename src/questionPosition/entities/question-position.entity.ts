import { Question } from 'src/question/entities/question.entity';
import { Round } from 'src/round/entities/round.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class QuestionPosition {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Field(() => Int)
  @Column()
  public position!: number;

  @Field(() => Question)
  @ManyToOne(() => Question, (question) => question.position, {
    cascade: true,
    onDelete: 'SET NULL',
    eager: true,
  })
  public question!: Question;

  @Field(() => Round)
  @ManyToOne(() => Round, (round) => round.position, {
    cascade: true,
    onDelete: 'SET NULL',
    eager: true,
  })
  public round!: Round;
}
