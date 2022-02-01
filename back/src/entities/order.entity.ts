import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
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

  //  @Column()
  orderItems: OrderItem[]

  //  @Column()
  stores: Store[]

  details: OrderDetails
}
