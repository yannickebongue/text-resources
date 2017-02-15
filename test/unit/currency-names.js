QUnit.module( "text-resources: currency-names" );

QUnit.test( "currency names", function( assert ) {
    assert.ok( CurrencyNames.hasOwnProperty( "" ) );
} );
