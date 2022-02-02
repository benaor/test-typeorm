import {
  Column,
  Entity,
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
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

  @ManyToOne((type) => Category, (c: Category) => c.childrenCategories, {
    onDelete: "SET NULL"
  })
  parentCategory: Category

  @OneToMany((type) => Category, (c: Category) => c.parentCategory, {
    cascade: false
  })
  childrenCategories: Category[]
}
