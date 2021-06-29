import { ObjectType, Field } from '@nestjs/graphql';
import { Round } from 'src/round/entities/round.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Trivia {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  game_status: string;

  @OneToMany(() => Round, (round) => round.trivia)
  rounds: Round[];

  @ManyToMany(() => User, { cascade: true })
  admins: User[];
}
