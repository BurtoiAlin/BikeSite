const serveStatic = require('serve-static');
const express = require("express")
express()
    .use(serveStatic(__dirname))
    .listen(8080, () => console.log('Server running on 8080...'));