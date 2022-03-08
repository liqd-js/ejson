'use strict';

function replacer( key, value )
{
    if( typeof this[key] === 'object' )
    {
        if( this[key] instanceof Date )
        {
            return { $date: this[key].getTime() }
        }
    }

    return value;
}

function reviver( key, value )
{
    if( value && typeof value === 'object' )
    {
        if( value.$date )
        {
            return new Date( value.$date );
        }
    }

    return value;
}

module.exports = class EJSON
{
    static stringify( obj )
    {
        return JSON.stringify( obj, replacer );
    }

    static parse( ejson )
    {
        return JSON.parse( ejson, reviver );
    }
}