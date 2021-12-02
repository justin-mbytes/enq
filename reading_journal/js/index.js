$(document).ready(function () {

    $('#comicHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Witches.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Comic Strip<br><br>Henry, Yr 3, responding to <i>The Witches</i> by Roald Dahl.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });

    $('#feelingConnectedHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Witches.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Feeling Connected<br><br>Henry, Yr 3, responding to <i>The Witches</i> by Roald Dahl.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });

    $('#forRealBianca').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/Holes.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'For Real?<br><br>Bianca, Yr 6, responding to <i>Holes</i> by Louis Sachar.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
    $('#fromTheHeartHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Witches.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'From the Heart<br><br>Henry, Yr 3, responding to <i>The Witches,</i> by Roald Dahl.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
    $('#fromTheHeartFinn').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'From the Heart<br><br>Finn, Yr 6, responding to <i>The Hunger Games,</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });    

    $('#iPredictHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/worlds_worst_parents.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'I Predict<br><br>Henry, Yr 3, responding to <i>World&#39s Worst Parents</i> by David Walliams.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });    

    $('#iSayJordan').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/imthebest.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'I Say...<br><br>Jordan, Yr 2, responding to <i>I&#39m The Best</i> by Lucy Cousins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });      

    $('#makeBelieveHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Witches.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Make Believe<br><br>Henry, Yr 3, responding to <i>The Witches</i> by Roald Dahl.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });    

    $('#newWordAlertRory').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/goodnightmrtom.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'New World Alert!<br><br>Rory, Yr 3, responding to <i>Goodnight Mr Tom</i> by Michelle Magorian.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
    $('#oneOffMax').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'One Off<br><br>Max, Yr 6, responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });      

        $('#referAFriendMax').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Refer a Friend<br><br>Max, Yr 6,  responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#surpriseMax').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Surprise!<br><br>Max, Yr 6,  responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#tellAFriendJordan').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/peck.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Tell a Friend<br><br>Jordan, Yr 2,  responding to <i>Peck Peck Peck</i> by Lucy Cousins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#whatColourHenry').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Witches.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'What Colour am I?<br><br>Henry, Yr 3,  responding to <i>The Witches</i> by Roald Dahl.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#whatColourMax').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'What Colour am I?<br><br>Max, Yr 6,  responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#believeAlana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Believe<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by C M Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#compcontjarron').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/always.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Compare and Contrast<br><br>Jarron, Yr 6, responding to <i>Always</i> by Morris Gleitzman.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#fig_scav_alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/alicewonderland.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Figuarative Language Scavenger Hunt<br><br>Alana, Yr 8, responding to <i>Alice&#39;s Adventures in Wonderland</i> by Lewis Carroll.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#fortune_alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/alicewonderland.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Fortune Telling<br><br>Alana, Yr 8, responding to <i>Alice&#39;s Adventures in Wonderland</i> by Lewis Carroll.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#fromtheHeartAlana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'From the Heart<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#idontgetit_alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'I don&#39;t get it?<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#judgeCover_alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Judge a Book By Its Cover...Please.<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#makeSense_Alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Making Sense of it All.<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#oneOff_Alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'One Off.<br><br>Alana, Yr 8, responding to <i>Flight of the Griffon</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#picturePerfect_Alice').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/koalalou.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Picture Perfect<br><br>Alice, Yr 2, responding to <i>Koala Lou</i> by Mem Fox.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#picturePerfect_Jarron').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/always.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Picture Perfect<br><br>Jarron, Yr 6, responding to <i>Always</i> by Morris Gleitzman.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#somebody_Jarron').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/always.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Somebody. Wanted. But. So. Then.<br><br>Jarron, Yr 6, responding to <i>Always</i> by Morris Gleitzman.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });      

        $('#writeHome_Alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Something to Write Home About!<br><br>Alana, Yr 8, responding to <i>Flight of the Griffin</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#whoAmI_Alana').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/flightgriffin.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Who am I?<br><br>Alana, Yr 8, responding to <i>Flight of the Griffin</i> by CM Gray.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#bookReview_Max').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'Book Review<br><br>Max, Yr 6, responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
        $('#whatIf_Max').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="book-thumb"><img src="images/covers/The%20Hunger%20Games.jpg"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            titleSrc: function (item) {
                return item.el.attr('title') + 'What If?<br><br>Max, Yr 6, responding to <i>The Hunger Games</i> by Suzanne Collins.<br><br>';
            },

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });
    
});
