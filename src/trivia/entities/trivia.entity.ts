import { ObjectType, Field } from '@nestjs/graphql';
import { Round } from 'src/round/entities/round.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Trivia {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  position: string;

  @OneToMany(() => Round, (round) => round.trivia)
  rounds: Round[];
}
