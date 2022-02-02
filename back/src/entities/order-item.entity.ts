import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Order } from "./order.entity"
import { Product } from "./product.entity"

/**
 * Amazon Order Item Entity
 *
 * quantity
 * products
 *
 * @export
 * @class OrderItem
 */
@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number

  @ManyToOne((type) => Product, { onDelete: "RESTRICT" })
  products: Product[]

  @ManyToOne((type) => Order, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  order: Order
}
