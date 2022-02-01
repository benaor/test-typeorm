import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "./store.entity";

/**
 * Amazon seller account
 * 
 * firstname
 * lastname
 * email
 * password
 * address1
 * address2
 * zipcode
 * city
 * stores 
 *
 * @export
 * @class Seller
 */
@Entity()
export class Seller extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

     @Column()
     firstname:string

     @Column()
     lastname:string

     @Column()
     email:string

     @Column()
     password:string

     @Column()
     address1:string

     @Column()
     address2:string

     @Column()
     zipcode:number

     @Column()
     city:string

    //  @Column()
     stores :Store[]

}