const { config, api: { start } } = require('./../../src'); 

config({
    host: "localhost",
    port: 8000,
    apiRootUrl: "/v1",
    auth:{
        key: "privateKeys",
        exclude:['/v1/user/login','/v1/user/create'],
    },
    services: {
        say: {
            apiRootUrl: "/",
            api: {
                helloworld: () => "hello world", //http://localhost:8000/v1/helloworld
            },
        },
        user: {
            api: {
                create: (dto, ctx) => dto, //http://localhost:8000/v1/user/create
            },
        },
        userLog: {
            name: "user_log",
            api: {
                create: (dto, ctx) => dto, //http://localhost:8000/v1/user/log/create
            },
        },
    },
});

start();