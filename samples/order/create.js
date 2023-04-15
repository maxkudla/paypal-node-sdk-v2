/* Copyright 2015-2016 PayPal, Inc. */
"use strict";
var paypal = require('../../');
require('../configure');

var create_payment_json = {
    "intent": "CAPTURE",
    "purchase_units": [
        {
            "amount": {
                "currency_code": "USD",
                "value": "100.00"
            },
        }
    ],
};

paypal.order.create(create_payment_json, {
    headers: {
        "PayPal-Request-Id": "d9f80740-38f0-11e8-b467-0ed5f89f7183"
    }
}).then(console.log).catch(console.error)
