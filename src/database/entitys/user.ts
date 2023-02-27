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
import {Stickynotes} from "./stickyNotes";
import {v4 as uid} from "uuid";

@Entity({name: "users"})
export class Users {
  @PrimaryColumn()
  uid!: string;
  @Column({name: "name"})
  name!: string;
  @Column({name: "email"})
  email!: string;
  @Column({name: "password"})
  password!: string;
  @Column({name: "created_at"})
  createdAt!: Date;
  @Column({name: "updated_at"})
  updatedAt?: Date;
  @OneToMany(() => Stickynotes, (fk) => fk.Sticky)
  @JoinColumn({name: "uid", referencedColumnName: "user_uid"})
  Sticky?: Stickynotes[];

  @BeforeInsert()
  beforeInsert() {
    this.uid = uid();
  }
}
