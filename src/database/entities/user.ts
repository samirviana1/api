import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from "typeorm";
import {v4 as uid} from "uuid";

@Entity({name: "users"})
export class Users extends BaseEntity {
  @PrimaryColumn({name: "uid_user"})
  uidUser!: string;
  @Column({name: "name"})
  name!: string;
  @Column({name: "email"})
  email!: string;
  @Column({name: "password"})
  password!: string;
  @Column({name: "created_at"})
  createdAt!: Date;
  @Column({name: "updated_at"})
  updatedAt?: Date | null;

  @BeforeInsert()
  beforeInsert() {
    this.uidUser = uid();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
