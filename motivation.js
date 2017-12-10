$(document).ready( function() {
       var textArray = [
{"text": 'Feels classic and modern all at once.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Very nice work.', "name": "Kyle", "url": "http://kyleadams.me/"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Perfect!!! I love it!', "name": "Ryan", "url": "http://ryan.zcool.com.cn/"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'Simple and nice!', "name": "Ricky", "url": "http://jamienicoll.com"},
{"text": 'Looks awesome!', "name": "Barry", "url": "http://dribbble.com/BarryMccalveyDesign"},
{"text": 'So clean', "name": "Zak", "url": "http://dribbble.com/Zak_keen"},
{"text": 'Love this.', "name": "Jamie", "url": "http://jamienicoll.com"},
{"text": 'This is so wonderful!', "name": "Olaus", "url": "http://olaus.co"},
{"text": 'Oh, this is mega awesome', "name": "Lindsey", "url": "http://designcarnivore.com/"},

       ];

       // -- Initialise the random selection
       $('#text-box').randomText( textArray, 5000, "Praise my work." ); // ( array, interval, ["reload text or html"] )
   }); // end of "document ready"

// --------------------------------------------- //

   // custom jquery plugin loadText()
   $.fn.randomText = function( textArray, interval, randomEle, prevText ) {
       var obj = $(this);

       // -- create #text-content the first time this runs (so that we have somewhere to put the words)
       if( $('#text-content').length == 0 ){ obj.append('<div id="text-content">'); }

       // this is where the text goes into
       var textCont = $('#text-content');

       textCont.fadeOut( 'fast', function() {

           // -- select a random entry from the big array at the top
           var chosenEntry = random_array( textArray );

           // -- prevent showing the same one twice in a row
           while( chosenEntry == prevText ) { chosenEntry = random_array( textArray ); }

           // -- clear out the old text entry, and then add the new one, including the text and name
           textCont.empty().html( "<div class='text'>"+chosenEntry.text+"</div><div class='name'><a href='"+chosenEntry.url+"' target='_blank'>"+chosenEntry.name+"</a></div>" );

           // -- fade in the new text
           textCont.fadeIn( 'fast' );

           // -- record this entry, so that it doesn't get used the very next time (prevent duplicates)
           sendText = chosenEntry;
       });
       timeOut = setTimeout( function(){ obj.randomText( textArray, interval, randomEle, sendText ); }, interval );

       // set up a listener for the clicks on the text (ie so that you can click the text and get a new one)
       $("#text-content").click( function(){
           if( !textCont.is(':animated') ) { clearTimeout( timeOut ); obj.randomText( textArray, interval, randomEle, sendText );} // animation check prevents "too much recursion" error in jQuery
       });
   }

   //public function
   function random_array( aArray ) {
       var rand = Math.floor( Math.random() * aArray.length + aArray.length );
       var randArray = aArray[ rand - aArray.length ];
       return randArray;
   }
