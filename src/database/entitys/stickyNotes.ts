import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import {Users} from "./user";

@Entity({name: "mensagens"})
export class Stickynotes {
  @PrimaryColumn()
  uid_msg!: string;
  @Column({name: "title"})
  name!: string;
  @Column({name: "description"})
  description!: string;
  @Column({name: "created_at"})
  createdAt!: Date;
  @Column({name: "updated_at"})
  updatedAt?: Date;
  @OneToOne(() => Users, (fk) => fk.Sticky)
  @JoinColumn({name: "uid", referencedColumnName: "user_uid"})
  Sticky!: Users;
}
