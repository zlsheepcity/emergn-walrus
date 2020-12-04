let ExampleList = {

    YourIndustry: {
        caption: 'Your Industry',
        placeholder: 'Select from list',
        list: [
            { label: 'SAP Standart Industry A', code: 'IndA' },
            { label: 'SAP Standart Industry B', code: 'IndB' },
            { label: 'SAP Standart Industry C', code: 'IndC' },
            { label: 'SAP Standart Industry D', code: 'IndD' },
            { label: 'SAP Standart Industry E', code: 'IndE' },
        ],
    },

    PrimaryFocusLOB: {
        caption: 'Primary Focus LOB',
        placeholder: 'Select from list',
        list: [
            {
                label: 'Asset Management',
                code: 'FLOB1',
                list: [
                    { label: 'BA x for Asset Management', code: 'FLOB1_1' },
                    { label: 'BA y for Asset Management', code: 'FLOB1_2' },
                    { label: 'BA z for Asset Management', code: 'FLOB1_3' },
                ],
            },
            {
                label: 'Finance',
                code: 'FLOB2',
                list: [
                    { label: 'BA x for Finance', code: 'FLOB2_1' },
                    { label: 'BA y for Finance', code: 'FLOB2_2' },
                    { label: 'BA z for Finance', code: 'FLOB2_3' },
                ],
            },
            { label: 'Manufacturing', code: 'FLOB3' },
            { label: 'Sales', code: 'FLOB4' },
            { label: 'Sourcing & Procurement', code: 'FLOB5' },
            { label: 'Supply Chain', code: 'FLOB6' },
        ],
    },

    FirstBA: {
        caption: 'First most important Business Area',
        placeholder: 'Select from list',
    },

    SecondBA: {
        caption: 'Second most important Business Area',
        placeholder: 'Select from list',
    },

    SecondaryFocusLOB: {
        caption: 'Secondary Focus LOB',
        placeholder: 'Select from list',
        list: [
            {
                label: 'Asset Management',
                code: 'FLOB1',
                list: [
                    { label: 'BA x for Asset Management', code: 'FLOB1_1' },
                    { label: 'BA y for Asset Management', code: 'FLOB1_2' },
                    { label: 'BA z for Asset Management', code: 'FLOB1_3' },
                ],
            },
            {
                label: 'Finance',
                code: 'FLOB2',
                list: [
                    { label: 'BA x for Finance', code: 'FLOB2_1' },
                    { label: 'BA y for Finance', code: 'FLOB2_2' },
                    { label: 'BA z for Finance', code: 'FLOB2_3' },
                ],
            },
            { label: 'Manufacturing', code: 'FLOB3' },
            { label: 'Sales', code: 'FLOB4' },
            { label: 'Sourcing & Procurement', code: 'FLOB5' },
            { label: 'Supply Chain', code: 'FLOB6' },
        ],
    },

    Currencies: {
        placeholder: 'Select from list',
        list: [
            {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "name_plural": "US dollars"
            },
            {
                "symbol": "CA$",
                "name": "Canadian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CAD",
                "name_plural": "Canadian dollars"
            },
            {
                "symbol": "€",
                "name": "Euro",
                "symbol_native": "€",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EUR",
                "name_plural": "euros"
            },
            {
                "symbol": "AED",
                "name": "United Arab Emirates Dirham",
                "symbol_native": "د.إ.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AED",
                "name_plural": "UAE dirhams"
            },
            {
                "symbol": "Af",
                "name": "Afghan Afghani",
                "symbol_native": "؋",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AFN",
                "name_plural": "Afghan Afghanis"
            },
            {
                "symbol": "ALL",
                "name": "Albanian Lek",
                "symbol_native": "Lek",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ALL",
                "name_plural": "Albanian lekë"
            },
        ]
    }
}

export default ExampleList
