import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
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

//   @Column()
  products: Product[]
}
