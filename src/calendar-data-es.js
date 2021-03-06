( function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        global.CalendarData = module.require( "./calendar-data" );
        module.exports = factory( global );
    } else {
        factory( global );
    }

} )( this, function( global ) {

    global.CalendarData[ "es" ] = {
        "firstDayOfWeek": "2",
        "minimalDaysInFirstWeek": "1"
    };

    return global.CalendarData;

} );
