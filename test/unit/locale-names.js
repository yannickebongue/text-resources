QUnit.module( "text-resources: locale-names" );

QUnit.test( "locale names", function( assert ) {
    assert.ok( LocaleNames.hasOwnProperty( "" ) );
} );
