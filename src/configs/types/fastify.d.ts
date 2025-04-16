import { FastifyInstance } from 'fastify';
import { Pool } from 'mysql';

declare module 'fastify' {
    interface FastifyInstance {
        mysql: Pool; // Or your actual type for the mysql client
    }
}