import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import {Users} from "./user";
import {v4 as uid} from "uuid";

@Entity({name: "stickynotes"})
export class Stickynotes extends BaseEntity {
  @PrimaryColumn()
  uid_msg!: string;
  @Column({name: "title"})
  title!: string;
  @Column({name: "description"})
  description!: string;
  @Column({name: "created_at"})
  createdAt!: Date;
  @Column({name: "updated_at"})
  updatedAt?: Date | null;

  @ManyToOne(() => Users)
  @JoinColumn({name: "uid_user"})
  uidUser!: string;

  @BeforeInsert()
  beforeInsert() {
    this.uid_msg = uid();
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
