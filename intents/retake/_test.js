const conversation = require('alexa-conversation');
const app = require('../../index.js');
const config = require('../../config.json');

let opts = config.opts;
    opts.name = 'Retake Intent';
    opts.app = app;
    opts.handler = app.handler;

conversation(opts)
    .userSays('RetakeClassIntent', { "subject":"ENGL", "number":"101"})
    .plainResponse
        .shouldEqual("This class is offered at Bellevue College Fall 2018")
    .end();