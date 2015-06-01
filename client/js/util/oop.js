module.exports = {
    inherits: function (Target, Base) {
        for (var p in Base) if (Base.hasOwnProperty(p)) Target[p] = Base[p];
        function __() { this.constructor = Target; }
        __.prototype = Base.prototype;
        Target.prototype = new __();
    }
};