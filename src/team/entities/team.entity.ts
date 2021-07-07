import { ObjectType, Field } from '@nestjs/graphql';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  // @Field()
  // @Column()
  // scores: number[];
}
