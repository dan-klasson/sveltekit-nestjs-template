import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @IDField(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @FilterableField()
  @Column()
  name: string;

  @Column()
  password: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  created!: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn()
  updated!: Date;
}
