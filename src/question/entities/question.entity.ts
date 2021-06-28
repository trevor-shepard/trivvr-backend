import { ObjectType, Field } from '@nestjs/graphql';
import { RoundToQuestion } from 'src/round-to-question/entities/round-to-question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  prompt: string;

  @Field()
  @Column()
  answer: string;

  @OneToMany(
    () => RoundToQuestion,
    (roundToQuestion) => roundToQuestion.question,
  )
  public roundToQuestion!: RoundToQuestion[];
}
