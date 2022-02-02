import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
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

  @OneToMany((type) => Order, (o: Order) => o.customer, { cascade: true })
  orders: Order[]
}
