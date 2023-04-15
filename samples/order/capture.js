"use strict";

var paypal = require('../../');
require('../configure');

var orderId = "10829455T65744700";

var capture_details = {
    "payment_source": {
        "paypal": {
            "experience_context": {
                "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                "payment_method_selected": "PAYPAL",
                "brand_name": "EXAMPLE INC",
                "locale": "en-US",
                "landing_page": "LOGIN",
                "shipping_preference": "SET_PROVIDED_ADDRESS",
                "user_action": "PAY_NOW",
                "return_url": "https://example.com/returnUrl",
                "cancel_url": "https://example.com/cancelUrl"
            }
        }
    },
};

paypal.order.capture(orderId, capture_details, {
    headers: {
        "PayPal-Request-Id": "d9f80740-38f0-11e8-b467-0ed5f89f7181"
    }
}).then(console.log).catch(console.error)