const fraudCheckOrderData = {
    "data": [{
    "next": "http://mbf-order-api.service.nonprod.consul/api/v1/fraud-check-orders?ordering=-fraud_value&limit=20&offset=20",
    "count": 3674,
    "previous": null,
    "results": [
        {
            "updated_at": "2017-12-01T12:34:38.934712",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132422",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": true
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-01T12:34:34",
            "external_id": "ORDR21893284",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-01T12:37:57.257742",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132423",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": true,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-01T12:37:52",
            "external_id": "ORDR21893285",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-01T12:38:36.035361",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132424",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-01T12:38:31",
            "external_id": "ORDR21893286",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-01T13:25:06.120293",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132434",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": true
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-01T13:25:00",
            "external_id": "ORDR21893290",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:09:23.034123",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133149",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": true,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-05T09:09:17",
            "external_id": "ORDR21893309",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:10:17.396970",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133150",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-05T09:10:12",
            "external_id": "ORDR21893310",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:38:24.854790",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133158",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": true
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-05T09:38:20",
            "external_id": "ORDR21893317",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:39:21.562390",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133159",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": true,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-05T09:39:16",
            "external_id": "ORDR21893318",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:57:36.898696",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133169",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-05T09:57:31",
            "external_id": "ORDR21893322",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T10:40:05.516557",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133511",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": true,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-07T10:39:59",
            "external_id": "ORDR21893336",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T10:40:43.231055",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133512",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-07T10:40:38",
            "external_id": "ORDR21893337",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T14:09:56.123205",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133657",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": true
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-07T14:09:51",
            "external_id": "ORDR21893357",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T14:47:49.764320",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133672",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": true
            },
            "latest_fraud_status": "FRAUD CHECK FAILED",
            "status": "FRAUD CHECK FAILED",
            "placed_at": "2017-12-07T14:47:44",
            "external_id": "ORDR21893362",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-04T16:42:31.850972",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133089",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK MAYBE",
            "status": "FRAUD CHECK MAYBE",
            "placed_at": "2017-12-04T16:42:27",
            "external_id": "ORDR21893299",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:39:59.672515",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133160",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": true,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK MAYBE",
            "status": "FRAUD CHECK MAYBE",
            "placed_at": "2017-12-05T09:39:55",
            "external_id": "ORDR21893319",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-01T10:40:34.756805",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132357",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK PASSED",
            "status": "FRAUD CHECK PASSED",
            "placed_at": "2017-12-01T10:40:31",
            "external_id": "ORDR21893275",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-01T13:28:40.459798",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001132436",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK PASSED",
            "status": "FRAUD CHECK PASSED",
            "placed_at": "2017-12-01T13:28:37",
            "external_id": "ORDR21893292",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-05T09:31:22.103519",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133154",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK PASSED",
            "status": "FRAUD CHECK PASSED",
            "placed_at": "2017-12-05T09:31:19",
            "external_id": "ORDR21893313",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T13:25:42.051670",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133649",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK PASSED",
            "status": "FRAUD CHECK PASSED",
            "placed_at": "2017-12-07T13:25:24",
            "external_id": "ORDR21893349",
            "client_id": "gd"
        },
        {
            "updated_at": "2017-12-07T13:53:35.204104",
            "customer_reference": "CUS000000001",
            "order_reference": "ORD001133653",
            "order_line_types": [
                "home-trial"
            ],
            "fraud": {
                "is_postcode_blacklisted": false,
                "value": "380.00",
                "is_first_order": false,
                "is_email_blacklisted": false
            },
            "latest_fraud_status": "FRAUD CHECK PASSED",
            "status": "FRAUD CHECK PASSED",
            "placed_at": "2017-12-07T13:53:32",
            "external_id": "ORDR21893353",
            "client_id": "gd"
        }
    ]
    }]
}

export default fraudCheckOrderData;