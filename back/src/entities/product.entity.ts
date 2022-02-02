import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

/**
 * Amazon Product Entity
 *
 * name
 * photo
 * price
 * category
 * 
 **/
@Entity()
export class Product extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    photo:string

    @Column()
    price:string

    @ManyToOne(type=>Category, {onDelete:"SET NULL"})
    category:Category

}