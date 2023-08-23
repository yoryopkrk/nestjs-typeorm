import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFields1692654248447 implements MigrationInterface {
    name = 'AddFields1692654248447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`brands\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`brands\` ADD \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`brands\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`brands\` DROP COLUMN \`createdAt\``);
    }

}
