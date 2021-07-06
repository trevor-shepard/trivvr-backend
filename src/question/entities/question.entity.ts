import { ObjectType, Field, Int } from '@nestjs/graphql';
import { QuestionPosition } from 'src/questionPosition/entities/question-position.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Question {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  prompt: string;

  @Field()
  @Column()
  answer: string;

  @OneToMany(() => QuestionPosition, (position) => position.question)
  public position!: QuestionPosition[];
}
