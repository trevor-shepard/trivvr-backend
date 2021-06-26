import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Round {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  position: number;
}
