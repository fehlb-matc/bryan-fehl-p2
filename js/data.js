// Item category and pricing data

// Map that holds item pricing details
var itemPricing = new Map();

// JSON object holding item details
var itemDetails = {
    "toys":{
        "toy-action-hank": {
            "cost" : "29.99",
            "name" : "Action Hank Figurine"
        },
        "toy-barbie-doll": {
            "cost" : "17.23",
            "name" : "Barbie Fun Times Doll"
        },
        "toy-rubix-cube": {
            "cost" : "10.21",
            "name" : "Rubix Cube Puzzle Toy"
        },
        "toy-8-ball": {
            "cost" : "12.99",
            "name" : "Magic 8-Ball"
        },
        "toy-dart-board": {
            "cost" : "49.50",
            "name" : "12 Piece Dart Board Set"
        },
        "toy-lego-set": {
            "cost" : "71.99",
            "name" : "600 Piece Lego Set"
        }
    },
    "school": {
        "school-pencil-case": {
            "cost" : "3.49",
            "name" : "Metallic Pencil Case"
        },
        "school-notepad": {
            "cost" : "4.88",
            "name" : "150 Page College-Rule Notebook"
        },
        "school-eraser": {
            "cost" : "0.45",
            "name" : "Rubber Eraser"
        },
        "school-folder": {
            "cost" : "1.54",
            "name" : "Paper Folder"
        },
        "school-glue": {
            "cost" : "3.72",
            "name" : "Non-Toxic Glue, 1 oz"
        },
        "school-paper": {
            "cost" : "0.79",
            "name" : "100 Count College-Rule Paper"
        }
    },
    "home":{
        "home-rake": {
            "cost" : "8.44",
            "name" : "4 Foot Leaf Rake"
        },
        "home-broom": {
            "cost" : "8.32",
            "name" : "36-Inch Sweeping Broom"
        },
        "home-light-bulb": {
            "cost" : "1.23",
            "name" : "40 Watt Light Bulb"
        },
        "home-clippers": {
            "cost" : "9.13",
            "name" : "Hedge Clippers"
        },
        "home-bug-spray": {
            "cost" : "4.72",
            "name" : "Bug-Be-Gone Bug Spray 4oz"
        },
        "home-hose": {
            "cost" : "21.42",
            "name" : "18-Foot Water Hose"
        }
    },
    "bath" : {
        "bath-rug": {
            "cost" : "13.10",
            "name" : "24x32 Bathroom Rug"
        },
        "bath-handsoap": {
            "cost" : "3.12",
            "name" : "Liquid Hand Soap 3oz"
        },
        "bath-candle": {
            "cost" : "33.12",
            "name" : "Smoky Acres Candle"
        },
        "bath-towel": {
            "cost" : "9.99",
            "name" : "48-Inch Bath Towel"
        },
        "bath-curtains": {
            "cost" : "14.31",
            "name" : "Anti-Bacterial Bathroom Curtains"
        },
        "bath-toiletpaper": {
            "cost" : "3.23",
            "name" : "3-Ply Toilet Paper 4-Count"
        }
    }
}
// Map that holds item categor
var itemCategories = new Map();

// Insert item categories
//itemCategories.set("toys"  , ['toy-action-hank'   ,'toy-barbie-doll', 'toy-rubix-cube' , 'toy-8-ball'   , 'toy-dart-board', 'toy-lego-set'    ]);
//itemCategories.set("school", ['school-pencil-case', 'school-notepad', 'school-eraser'  , 'school-folder', 'school-glue'   , 'school-paper'    ]);
//itemCategories.set("home"  , ['home-rake'         , 'home-broom'    , 'home-light-bulb', 'home-clippers', 'home-bug-spray', 'home-hose'       ]);
//itemCategories.set("bath"  , ['bath-rug'          , 'bath-handsoap' , 'bath-candle'    , 'bath-towel'   , 'bath-curtains' , 'bath-toiletpaper']);

itemCategories.set("toys"  , "Toys");
itemCategories.set("school", "School Supplies");
itemCategories.set("home"  , "Home and Garden");
itemCategories.set("bath"  , "Bath and Bedroom");