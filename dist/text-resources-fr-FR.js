/*! text-resources | 0.1.2 | 2017-09-06 */
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        global.CurrencyNames = module.require("./currency-names");
        module.exports = factory(global);
    } else {
        factory(global);
    }
})(this, function(global) {
    global.CurrencyNames["fr-FR"] = {
        EUR: "\u20ac",
        FRF: "F"
    };
    return global.CurrencyNames;
});

(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        global.FormatData = module.require("./format-data");
        module.exports = factory(global);
    } else {
        factory(global);
    }
})(this, function(global) {
    global.FormatData["fr-FR"] = {};
    return global.FormatData;
});