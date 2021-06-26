import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Trivia {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  position: string;
}
