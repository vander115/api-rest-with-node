// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex';

Knex;

declare module 'knex/types/tables' {
    export interface Tables {
        transactions: {
            id: string;
            title: string;
            amount: number;
            created_at: Date;
            session_id?: string;
        };
    }
}
