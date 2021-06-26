import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
