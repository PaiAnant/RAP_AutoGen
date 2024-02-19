sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/travel/autogenrap/test/integration/FirstJourney',
		'com/travel/autogenrap/test/integration/pages/ZC_RAP100_ATRAV_APList',
		'com/travel/autogenrap/test/integration/pages/ZC_RAP100_ATRAV_APObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_RAP100_ATRAV_APList, ZC_RAP100_ATRAV_APObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/travel/autogenrap') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_RAP100_ATRAV_APList: ZC_RAP100_ATRAV_APList,
					onTheZC_RAP100_ATRAV_APObjectPage: ZC_RAP100_ATRAV_APObjectPage
                }
            },
            opaJourney.run
        );
    }
);