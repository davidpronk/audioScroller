(function(){

    'use strict';

    var requireConf = {
        paths : {
            jquery: 'vendor/jquery/1.8/jquery.min',
            stapes: 'vendor/stapes/0.8.1/stapes.min'
        }
    };

    require(

        requireConf,

        [
            'AudioController',
            'jquery'
        ],

        function( AudioController, $ ){

            var audioController = new AudioController( '/audio/1-01 Wakin On A Pretty Day.mp3' );

            audioController.on( 'loaded', function(){
                audioController.play();
            });

            audioController.init();

        }
    );

})();