define(
    [
        'stapes',
        'jquery'
    ], function( Stapes, $ ){

    'use strict';

    var audioController = Stapes.subclass({

        constructor: function( audioTrack ) {
            this.audioTrack = audioTrack;
        },

        init: function(){
            this.emit( 'loaded' );
        },

        play: function(){

        }

    });

    return audioController;

    }
);