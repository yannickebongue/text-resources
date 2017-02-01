/*! text-resources | 0.0.2 | 2017-02-01 */
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        global.CurrencyNames = module.require("./currency-names");
        module.exports = factory(global);
    } else {
        factory(global);
    }
})(this, function(global) {
    global.CurrencyNames["es-ES"] = {
        ESP: "Pts",
        EUR: "\u20ac"
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
    global.FormatData["es-ES"] = {
        NumberPatterns: [ "#,##0.###;-#,##0.###", "#,##0 \xa4;-#,##0 \xa4", "#,##0%" ]
    };
    return global.FormatData;
});