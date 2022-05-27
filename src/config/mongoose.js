const mongoose = require("mongoose");
module.exports = app => {
    mongoose.connect('mongodb+srv://paaa:pemrogramanpaa123@cluster0.ar1x3.mongodb.net/checkout', {
    }).then(res => console.log("conneceted")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};
function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}