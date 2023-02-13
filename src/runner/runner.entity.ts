import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "runners"})
export class Runner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"character varying", length:100})
    nombre:string

    @Column({type:"character varying", length:100})
    apellido:string

    @Column({type:"integer"})
    cedula:number

    @Column({type:"date"})
    fecha_nacimieto:Date

    @Column({type:"integer", nullable:true})
    talla_zapatos:number

    @Column({type:"character varying", length:5, nullable:true})
    talla_franela:string

    @Column({type:"character varying", length:500})
    direccion: string

    @Column({type:"boolean", nullable:true})
    vive_solo:boolean

    @Column({type:"character varying", length:100, nullable:true})
    especifique:string

    @Column({type:"character varying", length:100,nullable:true})
    profesion:string

    @Column({type:"character varying", length:100, nullable:true})
    red_social:string

}