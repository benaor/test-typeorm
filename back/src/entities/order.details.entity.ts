import { Order } from "./order.entity"
import { Store } from "./store.entity"
import { OrderItem } from "./order-item.entity"

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from "typeorm"

/**
 * Amazon Order Details Entity
 *
 * details
 * order
 *
 * @export
 * @class OrderDetails
 */
@Entity()
export class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  details: string

  @OneToOne((type) => Order, { onDelete: "CASCADE" })
  @JoinColumn()
  order: Order
}
