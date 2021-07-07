import { ObjectType, Field,  } from '@nestjs/graphql';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import JSON from 'graphql-type-json';

@Entity()
@ObjectType()
export class Team {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Trivia, (trivia) => trivia.teams, {
    cascade: true,
  })
  trivia: Trivia;

  @Field(() => JSON)
  @Column('json')
  scores: number[];

  @Field(() => JSON)
  @Column('json')
  responses: string[][];
}
