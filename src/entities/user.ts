import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert} from "typeorm";
import bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ nullable: false })
    public firstName!: string;

    @Column({ nullable: false })
    public lastName!: string;

    @Column({ unique: true })
    public email!: string;

    @Column({ nullable: false })
    public password!: string;

    @CreateDateColumn({ default: new Date() })
    public createdAt!: Date;

    @UpdateDateColumn({ default: new Date() })
    public updatedAt!: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10); 
    }
}