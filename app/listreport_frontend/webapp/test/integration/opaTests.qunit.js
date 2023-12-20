sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'listreportfrontend/test/integration/FirstJourney',
		'listreportfrontend/test/integration/pages/BooksList',
		'listreportfrontend/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('listreportfrontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);