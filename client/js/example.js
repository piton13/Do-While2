module.exports = {
    sayHello: function (greet) {
        if(typeof greet === 'undefined')
            greet = '';
        return ("hello " + greet).trim();
    }
};