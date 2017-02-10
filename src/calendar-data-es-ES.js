( function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        global.CalendarData = module.require( "./calendar-data" );
        module.exports = factory( global );
    } else {
        factory( global );
    }

} )( this, function( global ) {

    global.CalendarData[ "es-ES" ] = {
        "firstDayOfWeek": "2",
        "minimalDaysInFirstWeek": "4"
    };

    return global.CalendarData;

} );
