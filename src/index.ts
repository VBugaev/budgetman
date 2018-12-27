import express from 'express';

interface User {
    name: string,
    username: string
}

const app = express();

const simpleUser: User = {
    name: 'Vova',
    username: 'Bugaev'
}