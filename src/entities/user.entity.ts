import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column("varchar", { length: 100 })
  public firstName!: string;

  @Column("varchar", { length: 100 })
  public lastName!: string;

  @Column("varchar", { length: 100 })
  public email!: string;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
