import { MigrationInterface, QueryRunner } from 'typeorm'

export class Akshit1579158240655 implements MigrationInterface {
    name = 'Akshit1579158240655'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            'CREATE TABLE "adminUser" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "password" character varying(128) NOT NULL, CONSTRAINT "UQ_2461a300fe1ed769d7a96fa054b" UNIQUE ("email"), CONSTRAINT "PK_f155e50a944f2658dc1ccb477a2" PRIMARY KEY ("id"))',
            undefined
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "adminUser"', undefined)
    }
}
