import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Order } from "./order.entity"

@Entity()
export class Customer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  adress1: string

  @Column()
  adress2: string

  @Column()
  zipcode: number

  @Column()
  city: string

//   @Column()
  orders: Order[ ]
}
