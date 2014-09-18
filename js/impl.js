(function(){

    'use strict';

    var requireConf = {
        paths : {
            jquery: 'bower_components/jquery/dist/jquery.min',
            stapes: 'bower_components/stapes/stapes.min.js'
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