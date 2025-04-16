import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
// import fastifyMysql from '@fastify/mysql';
import * as dbQuery from "./users.dbquery"

export const getAllUsers = (req: FastifyRequest, reply: FastifyReply) => {
    try {
        //database get all users
        const res = dbQuery.getAllLocalUser();
        reply.send(res)

    } catch (err) {
        return reply.code(500).send({ error: err })
    }
};

export const getSingleUserbyID = (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const { id } = req.params as { id: number };
        //get a user information from mysql database
        const currentUser = dbQuery.getLocalUser(id);
        reply.send(currentUser)

    } catch (err) {
        return reply.code(500).send({ error: err })
    }
};

export const postCreateUser = (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const { name, email } = req.body as Iuser;
        const newUser = { id: 0, name: name, email: email };
        const res = dbQuery.createLocalUser(newUser);
        reply.send(res);
    } catch (err) {
        return reply.code(500).send({ error: err })
    }
};

export const putUpdateUser = (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const { id } = req.params as { id: number };
        const { name, email } = req.body as Iuser;
        const updatedUser = { id: id, name: name ? name : "", email: email ? email : "" };
        //user update
        const res = dbQuery.updateLocalUser(updatedUser);
        reply.send(res);

    } catch (err) {
        return reply.code(500).send({ error: err })
    }
};

export const deleteUser = (req: FastifyRequest, reply: FastifyReply) => {
    try {
        //locally delete a user
        const params = req.params as { id: string };
        const id = parseInt(params.id, 10);
        const res = dbQuery.deleteLocalUser(id);
        reply.send(res)

    } catch (err) {
        return reply.code(500).send({ error: err })
    }
};