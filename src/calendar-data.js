( function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = factory( global );
    } else {
        factory( global );
    }

} )( this, function( global ) {

    global.CalendarData = {
        "": {
            "firstDayOfWeek": "1",
            "minimalDaysInFirstWeek": "1"
        }
    };

    return global.CalendarData;

} );
