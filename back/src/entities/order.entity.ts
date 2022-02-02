import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Customer } from "./customer.entity"
import { OrderItem } from "./order-item.entity"
import { OrderDetails } from "./order.details.entity"
import { Store } from "./store.entity"

/**
 * Amazon Order Entity
 *
 * date
 * orderItems
 * stores
 * details
 *
 * @export
 * @class Order
 */
@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @OneToMany((type) => OrderItem, (oi: OrderItem) => oi.order, {
    cascade: true
  })
  orderItems: OrderItem[]

  stores: Store[]

  @OneToOne((type) => OrderDetails, { cascade: true })
  details: OrderDetails

  @ManyToOne((type) => Customer, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  customer: Customer
}
