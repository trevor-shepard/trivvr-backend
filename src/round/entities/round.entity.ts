import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
}
