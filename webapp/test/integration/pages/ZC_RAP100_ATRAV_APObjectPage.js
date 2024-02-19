sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.travel.autogenrap',
            componentId: 'ZC_RAP100_ATRAV_APObjectPage',
            contextPath: '/ZC_RAP100_ATRAV_AP'
        },
        CustomPageDefinitions
    );
});