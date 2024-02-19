sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.travel.autogenrap',
            componentId: 'ZC_RAP100_ATRAV_APList',
            contextPath: '/ZC_RAP100_ATRAV_AP'
        },
        CustomPageDefinitions
    );
});