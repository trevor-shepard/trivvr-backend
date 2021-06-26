import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Round } from 'src/round/entities/round.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToMany(() => Round, (round) => round.questions)
  rounds: Round[];
}
