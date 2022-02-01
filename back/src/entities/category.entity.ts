import {
  Column,
  Entity,
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from "typeorm"

/**
 * Amazon Product Category Entity
 *
 * name
 * parentCategory
 * childrenCategories
 *
 * @export
 * @class Category
 */
@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  //   @Column()
  parentCategory: Category

  //   @Column()
  childrenCategory: Category[]
}
