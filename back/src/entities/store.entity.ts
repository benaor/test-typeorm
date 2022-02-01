import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
