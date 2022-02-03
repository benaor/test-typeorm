import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Order } from "./order.entity"
import { Seller } from "./seller.entity"

/**
 * Amazon Store Entity
 *
 * name
 * photo
 * address1
 * address2
 * zipcode
 * city
 *
 * @export
 * @class Store
 */
@Entity()
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  photo: string

  @Column()
  address1: string

  @Column()
  address2: string

  @Column()
  zipcode: string

  @Column()
  city: string

  @ManyToOne((type) => Seller, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  seller: Seller
}
