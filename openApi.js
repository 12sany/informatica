const HSPort = 1234;
const WSPort = 1235;
//const ip   = "localhost";
const ip     = "95.217.166.217";
const path   = "/var/www/html/informatica"; // change project path <<===|\|

const apiSHeader = {
    swaggerDefinition : {
        info : {
            title : "API for nodejs-game",
            version : "1.0.0",
            description : "This is an API for simple server game, that is based on websockets",
            servers : ["http://" + ip + ":" + HSPort, "ws://" + ip + ":" + WSPort],
            HSPort : HSPort,
            WSPort : WSPort
        }
    },
    apis : [path + "/v1/api.js"],
    path : path
};

module.exports = apiSHeader;
