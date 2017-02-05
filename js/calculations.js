
"use strict";

// JSON Data

var Teams = [

    {
        "ID": "0001",
        "Name": "Arsenal"
    },
    {
        "ID": "0002",
        "Name": "Bournemouth"
    },
    {
        "ID": "0003",
        "Name": "Burnley"
    },
    {
        "ID": "0004",
        "Name": "Chelsea"
    },
    {
        "ID": "0005",
        "Name": "Crystal Palace"
    },
    {
        "ID": "0006",
        "Name": "Everton"
    },

    {
        "ID": "0007",
        "Name": "Hull City"
    },

    {
        "ID": "0008",
        "Name": "Leicester City"
    },

    {
        "ID": "0009",
        "Name": "Liverpool"
    },

    {
        "ID": "0010",
        "Name": "Manchester City"
    },

    {
        "ID": "0011",
        "Name": "Manchester United"
    },

    {
        "ID": "0012",
        "Name": "Middlesbrough"
    },

    {
        "ID": "0013",
        "Name": "Southampton"
    },

    {
        "ID": "0014",
        "Name": "Stoke City"
    },
    {
        "ID": "0015",
        "Name": "Sunderland"
    },
    {
        "ID": "0016",
        "Name": "Swansea City"
    },
    {
        "ID": "0017",
        "Name": "Tottenham Hotspur"
    },
    {
        "ID": "0018",
        "Name": "Watford"
    },
    {
        "ID": "0019",
        "Name": "West Bromwich Albion"
    },
    {
        "ID": "0020",
        "Name": "West Ham United"
    }

]


var Players = [

    //// GOALKEEPERS ////

    // Arsenal

    {
        "ID": "0001",
        "Name": "Cech, P",
        "Position": "Goalkeeper",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0002",
        "Name": "Szczesny, W",
        "Position": "Goalkeeper",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0003",
        "Name": "Ospina, D",
        "Position": "Goalkeeper",
        "TeamID": "0001",
        "TeamName": "Arsenal"

    },

    // Bournemouth

    {
        "ID": "0004",
        "Name": "Allsop, R",
        "Position": "Goalkeeper",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0005",
        "Name": "Boruc, A",
        "Position": "Goalkeeper",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0006",
        "Name": "Federici, A",
        "Position": "Goalkeeper",
        "TeamID": "0002",
        "TeamName": "Bournemouth"

    },

    // Burnley

    {
        "ID": "0007",
        "Name": "Robinson, P",
        "Position": "Goalkeeper",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0008",
        "Name": "Heaton, T",
        "Position": "Goalkeeper",
        "TeamID": "0003",
        "TeamName": "Burnley"
    },

    // Chelsea

    {
        "ID": "0009",
        "Name": "Blackman, J",
        "Position": "Goalkeeper",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0010",
        "Name": "Begovic, A",
        "Position": "Goalkeeper",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0011",
        "Name": "Courtois, T",
        "Position": "Goalkeeper",
        "TeamID": "0004",
        "TeamName": "Chelsea"

    },

    // Crystal Palace

    {
        "ID": "0012",
        "Name": "Speroni, J",
        "Position": "Goalkeeper",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0013",
        "Name": "McCarthy, A",
        "Position": "Goalkeeper",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0014",
        "Name": "Mandanda, S",
        "Position": "Goalkeeper",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"

    },

    // Crystal Palace

    {
        "ID": "0015",
        "Name": "Stekelenburg, M",
        "Position": "Goalkeeper",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0016",
        "Name": "Robles, J",
        "Position": "Goalkeeper",
        "TeamID": "0006",
        "TeamName": "Everton"
    },

    // Leicester City City

    {
        "ID": "0017",
        "Name": "Kuciak, D",
        "Position": "Goalkeeper",
        "TeamID": "0007",
        "TeamName": "Leicester City City"
    }, {
        "ID": "0018",
        "Name": "Jakupovic, E",
        "Position": "Goalkeeper",
        "TeamID": "0007",
        "TeamName": "Leicester City City"
    }, {
        "ID": "0019",
        "Name": "McGregor, A",
        "Position": "Goalkeeper",
        "TeamID": "0007",
        "TeamName": "Leicester City City"

    },

    // Leicester City

    {
        "ID": "0020",
        "Name": "Zieler, R",
        "Position": "Goalkeeper",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0021",
        "Name": "Schmeichel, K",
        "Position": "Goalkeeper",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0022",
        "Name": "Hamer, B",
        "Position": "Goalkeeper",
        "TeamID": "0008",
        "TeamName": "Leicester City"

    },

    // Liverpool

    {
        "ID": "0023",
        "Name": "Mignolet, S",
        "Position": "Goalkeeper",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0024",
        "Name": "Karius, L",
        "Position": "Goalkeeper",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0025",
        "Name": "Manninger, A",
        "Position": "Goalkeeper",
        "TeamID": "0009",
        "TeamName": "Liverpool"

    },

    // Manchester City

    {
        "ID": "0026",
        "Name": "Caballero, W",
        "Position": "Goalkeeper",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0027",
        "Name": "Hart, J",
        "Position": "Goalkeeper",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0581",
        "Name": "Bravo, C",
        "Position": "Goalkeeper",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    },

    // Manchester United

    {
        "ID": "0028",
        "Name": "de Gea, D",
        "Position": "Goalkeeper",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0029",
        "Name": "Romero, S",
        "Position": "Goalkeeper",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0030",
        "Name": "Johnstone, S",
        "Position": "Goalkeeper",
        "TeamID": "0011",
        "TeamName": "Manchester United"

    },

    // Middlesbrough

    {
        "ID": "0031",
        "Name": "Konstantopoulos, D",
        "Position": "Goalkeeper",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0032",
        "Name": "Valdes, V",
        "Position": "Goalkeeper",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0033",
        "Name": "Mejias, T",
        "Position": "Goalkeeper",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"

    },

    // Southampton

    {
        "ID": "0034",
        "Name": "Forster, F",
        "Position": "Goalkeeper",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0035",
        "Name": "Gazzaniga, P",
        "Position": "Goalkeeper",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0036",
        "Name": "McCarthy, A",
        "Position": "Goalkeeper",
        "TeamID": "0013",
        "TeamName": "Southampton"

    },

    // Stoke City

    {
        "ID": "0037",
        "Name": "Butland, J",
        "Position": "Goalkeeper",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0038",
        "Name": "Given, S",
        "Position": "Goalkeeper",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0039",
        "Name": "Haugaard, J",
        "Position": "Goalkeeper",
        "TeamID": "0014",
        "TeamName": "Stoke City"

    },

    // Sunderland

    {
        "ID": "0040",
        "Name": "Mannone, V",
        "Position": "Goalkeeper",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0041",
        "Name": "Pickford, J",
        "Position": "Goalkeeper",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    },

    // Swansea City

    {
        "ID": "0042",
        "Name": "Birighitti, M",
        "Position": "Goalkeeper",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0043",
        "Name": "Tremmel, G",
        "Position": "Goalkeeper",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0044",
        "Name": "Nordfeldt, K",
        "Position": "Goalkeeper",
        "TeamID": "0016",
        "TeamName": "Swansea City"

    }, {
        "ID": "0045",
        "Name": "Fabianski, L",
        "Position": "Goalkeeper",
        "TeamID": "0016",
        "TeamName": "Swansea City"

    },

    // Tottenham Hotspur

    {
        "ID": "0046",
        "Name": "Vorm, M",
        "Position": "Goalkeeper",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0047",
        "Name": "Lloris, H",
        "Position": "Goalkeeper",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    },

    // Watford

    {
        "ID": "0048",
        "Name": "Gomes, H",
        "Position": "Goalkeeper",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0049",
        "Name": "Arlauskis, G",
        "Position": "Goalkeeper",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0050",
        "Name": "Gilmartin, R",
        "Position": "Goalkeeper",
        "TeamID": "0018",
        "TeamName": "Watford"

    }, {
        "ID": "0051",
        "Name": "Pantilimon, C",
        "Position": "Goalkeeper",
        "TeamID": "0018",
        "TeamName": "Watford"

    },

    // West Bromwich Albion

    {
        "ID": "0052",
        "Name": "Foster, B",
        "Position": "Goalkeeper",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0053",
        "Name": "Myhill, B",
        "Position": "Goalkeeper",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    },

    // West Bromwich Albion

    {
        "ID": "0054",
        "Name": "Randolph, D",
        "Position": "Goalkeeper",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0055",
        "Name": "Adrian",
        "Position": "Goalkeeper",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0056",
        "Name": "Spiegel, R",
        "Position": "Goalkeeper",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    },

    //// DEFENDERS ////

    // Arsenal

    {
        "ID": "0057",
        "Name": "Chambers, C",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0058",
        "Name": "Holding, R",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0059",
        "Name": "Mertesacker, P",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0060",
        "Name": "Jenkinson, C",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0061",
        "Name": "Gabriel",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0062",
        "Name": "Monreal, N",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0063",
        "Name": "Debuchy, M",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0064",
        "Name": "Gibbs, K",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0065",
        "Name": "Koscielny, L",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0066",
        "Name": "Bellerin, H",
        "Position": "Defender",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    },

    // Bournemouth

    {
        "ID": "0067",
        "Name": "Mings, T",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0068",
        "Name": "Cargill, B",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0069",
        "Name": "Francis, S",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0070",
        "Name": "Ward, E",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0071",
        "Name": "Smith, A",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0072",
        "Name": "Smith, B",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0073",
        "Name": "Wiggins, R",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0075",
        "Name": "Daniels, C",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0076",
        "Name": "Cook, S",
        "Position": "Defender",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    },

    // Burnley

    {
        "ID": "0077",
        "Name": "Dummigan, C",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0078",
        "Name": "Mee, B",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0079",
        "Name": "Anderson, T",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0080",
        "Name": "Lowton, M",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0081",
        "Name": "Keane, M",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0082",
        "Name": "Long, K",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0083",
        "Name": "Darikwa, T",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0084",
        "Name": "Lafferty, D",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0085",
        "Name": "Ward, S",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0086",
        "Name": "Tarkowski, J",
        "Position": "Defender",
        "TeamID": "0003",
        "TeamName": "Burnley"
    },

    // Chelsea

    {
        "ID": "0087",
        "Name": "Terry, J",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0088",
        "Name": "Cahill, G",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0089",
        "Name": "Zouma, K",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0090",
        "Name": "Ivanovic, B",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0091",
        "Name": "Keane, M",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0092",
        "Name": "Azpilicueta, C",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0093",
        "Name": "Djilobodji, P",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0094",
        "Name": "Aina, O",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0095",
        "Name": "Miazga, M",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    },{
        "ID": "0074",
        "Name": "Ake, N",
        "Position": "Defender",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    },

    // Crystal Palace

    {
        "ID": "0096",
        "Name": "Souare, P",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0097",
        "Name": "Tomkins, J",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0098",
        "Name": "Fryers, Z",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0099",
        "Name": "Ward, J",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0100",
        "Name": "Hunt, J",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0101",
        "Name": "Dann, S",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0102",
        "Name": "Delaney, D",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0103",
        "Name": "Kelly, M",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },{
        "ID": "0126",
        "Name": "Schlupp, J",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },{
        "ID": "0210",
        "Name": "van Aanholt, P",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0143",
        "Name": "Sakho, M",
        "Position": "Defender",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },

    // Everton

    {
        "ID": "0104",
        "Name": "Funes Mori, R",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0105",
        "Name": "Holgate, M",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0106",
        "Name": "Pennington, M",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0107",
        "Name": "Garbutt, L",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0108",
        "Name": "Browning, T",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0109",
        "Name": "Jagielka, P",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0110",
        "Name": "Galloway, B",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0111",
        "Name": "Coleman, S",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0112",
        "Name": "Baines, L",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0221",
        "Name": "Williams, A",
        "Position": "Defender",
        "TeamID": "0006",
        "TeamName": "Everton"
    },

    // Hull City

    {
        "ID": "0113",
        "Name": "Odubajo, M",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0114",
        "Name": "Robertson, A",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0115",
        "Name": "Davies, C",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0116",
        "Name": "Bruce, A",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0117",
        "Name": "Lenihan, B",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0118",
        "Name": "Maguire, H",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0119",
        "Name": "Tymon, J",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0120",
        "Name": "Dawson, M",
        "Position": "Defender",
        "TeamID": "0007",
        "TeamName": "Hull City"
    },

    // Leicester City

    {
        "ID": "0121",
        "Name": "Benalouane, Y",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0122",
        "Name": "Chilwell, B",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0123",
        "Name": "Simpson, D",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0124",
        "Name": "Moore, L",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0125",
        "Name": "Morgan, W",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0127",
        "Name": "Fuchs, C",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0128",
        "Name": "Wasilewski, M",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0129",
        "Name": "Hernandez, L",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0130",
        "Name": "Huth, R",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0140",
        "Name": "de Laet, R",
        "Position": "Defender",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    },

    // Liverpool

    {
        "ID": "0141",
        "Name": "Moreno, A",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0142",
        "Name": "Matip, J",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0144",
        "Name": "Klavan, R",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0145",
        "Name": "Gomez, J",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0146",
        "Name": "Ilori, T",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0147",
        "Name": "Lovren, D",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0148",
        "Name": "Clyne, N",
        "Position": "Defender",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    },

    // Manchester City

    {
        "ID": "0149",
        "Name": "Otamendi, N",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0150",
        "Name": "Mangala, E",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0160",
        "Name": "Zabaleta, P",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0161",
        "Name": "Denayer, J",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0162",
        "Name": "Kolarov, A",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0163",
        "Name": "Kompany, V",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0164",
        "Name": "Clichy, G",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0165",
        "Name": "Sagna, B",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0166",
        "Name": "Stones, J",
        "Position": "Defender",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    },

    // Manchester Utd

    {
        "ID": "0167",
        "Name": "Valencia, A",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0168",
        "Name": "Blackett, T",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0169",
        "Name": "Jones, P",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0170",
        "Name": "Bailly, E",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0171",
        "Name": "Blind, D",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0172",
        "Name": "Shaw, L",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0173",
        "Name": "Smalling, C",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0174",
        "Name": "Tuanzebe, A",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0175",
        "Name": "McNair, P",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0176",
        "Name": "Fosu-Mensah, T",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0177",
        "Name": "Darmian, M",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0178",
        "Name": "Borthwick-Jackson, C",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    }, {
        "ID": "0179",
        "Name": "Rojo, M",
        "Position": "Defender",
        "TeamID": "0011",
        "TeamName": "Manchester Utd"
    },

    // Middlesbrough

    {
        "ID": "0180",
        "Name": "Fry, D",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0181",
        "Name": "Husband, J",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0182",
        "Name": "Ayala, D",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0183",
        "Name": "Espinosa, B",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0184",
        "Name": "Friend, G",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0185",
        "Name": "Nsue, E",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0186",
        "Name": "Barragan, A",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0187",
        "Name": "Gibson, B",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0188",
        "Name": "Baptiste, A",
        "Position": "Defender",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    },

    // Southampton

    {
        "ID": "0189",
        "Name": "Martina, C",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0190",
        "Name": "Soares, C",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0191",
        "Name": "Targett, M",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0192",
        "Name": "Bertrand, R",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0193",
        "Name": "Yoshida, M",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0194",
        "Name": "	McCarthy, J",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0195",
        "Name": "Pied, J",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0196",
        "Name": "Gardos, F",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0197",
        "Name": "Fonte, J",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0198",
        "Name": "van Dijk, V",
        "Position": "Defender",
        "TeamID": "0013",
        "TeamName": "Southampton"
    },

    // Stoke City

    {
        "ID": "0199",
        "Name": "Wilson, M",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0200",
        "Name": "Teixeira, D",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0201",
        "Name": "Muniesa, M",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0202",
        "Name": "Shawcross, R",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0203",
        "Name": "Johnson, G",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0204",
        "Name": "Bardsley, P",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0205",
        "Name": "Wollscheid, P",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0206",
        "Name": "Cameron, G",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0207",
        "Name": "Pieters, E",
        "Position": "Defender",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    },

    // Sunderland

    {
        "ID": "0208",
        "Name": "Kone, L",
        "Position": "Defender",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0208",
        "Name": "O'Shea, J",
        "Position": "Defender",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0209",
        "Name": "Jones, B",
        "Position": "Defender",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0211",
        "Name": "Djilobodji, P",
        "Position": "Defender",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0212",
        "Name": "Kaboul, Y",
        "Position": "Defender",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    },

    // Swansea City

    {
        "ID": "0213",
        "Name": "Fernandez, F",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0214",
        "Name": "Rangel, A",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0215",
        "Name": "van der Hoorn, M",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0216",
        "Name": "Tabanou, F",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0217",
        "Name": "Kingsley, S",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0218",
        "Name": "Taylor, N",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0219",
        "Name": "Reid, T",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0220",
        "Name": "Naughton, K",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0222",
        "Name": "Amat, J",
        "Position": "Defender",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    },

    // Tottenham Hotspur

    {
        "ID": "0223",
        "Name": "Trippier, K",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0224",
        "Name": "Vertonghen, J",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0225",
        "Name": "Alderweireld, T",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0226",
        "Name": "Walker, K",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0227",
        "Name": "	Rose, D",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0228",
        "Name": "Yedlin, D",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0229",
        "Name": "Davies, B",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0230",
        "Name": "Wimmer, K",
        "Position": "Defender",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    },

    // Watford

    {
        "ID": "0231",
        "Name": "Hoban, T",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0232",
        "Name": "Prodl, S",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0233",
        "Name": "Paredes, J",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0234",
        "Name": "Holebas, J",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0235",
        "Name": "Dja Djedje, B",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0236",
        "Name": "Cathcart, C",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0237",
        "Name": "Zuniga, J",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0238",
        "Name": "Kabasele, C",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0239",
        "Name": "Britos, M",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0240",
        "Name": "Nyom, A",
        "Position": "Defender",
        "TeamID": "0018",
        "TeamName": "Watford"
    },

    // West Bromwich Albion

    {
        "ID": "0241",
        "Name": "Dawson, C",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0242",
        "Name": "Gamboa, C",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0243",
        "Name": "Olsson, J",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0244",
        "Name": "Evans, J",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0245",
        "Name": "Chester, J",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0246",
        "Name": "Pocognoli, S",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0247",
        "Name": "McAuley, G",
        "Position": "Defender",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    },

    // West Ham United

    {
        "ID": "0248",
        "Name": "Cresswell, A",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0249",
        "Name": "Oxford, R",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0250",
        "Name": "Burke, R",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0251",
        "Name": "Collins, J",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0252",
        "Name": "Reid, W",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0253",
        "Name": "Hendrie, S",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0254",
        "Name": "Masuaku, A",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0255",
        "Name": "Byram, S",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0256",
        "Name": "Ogbonna, A",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0257",
        "Name": "Henry, D",
        "Position": "Defender",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    },

    //// MIDFIELDERS ////

    // Arsenal

    {
        "ID": "0258",
        "Name": "Walcott, T",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0259",
        "Name": "Ozil, M",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0260",
        "Name": "Wilshere, J",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0261",
        "Name": "Xhaka, G",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0262",
        "Name": "Cazorla, S",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0263",
        "Name": "Reine-Adelaide, J",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0264",
        "Name": "Iwobi, A",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0265",
        "Name": "Gnabry, S",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0266",
        "Name": "Bielik, K",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0267",
        "Name": "Ramsey, A",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0268",
        "Name": "Elneny, M",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0269",
        "Name": "Coquelin, F",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0270",
        "Name": "Campbell, J",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0271",
        "Name": "Sanchez, A",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0272",
        "Name": "Ox-Chamberlain, A",
        "Position": "Midfielder",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    },

    // Bournemouth

    {
        "ID": "0273",
        "Name": "Fraser, R",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0274",
        "Name": "Gradel, M",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0275",
        "Name": "Cook, L",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0276",
        "Name": "Ibe, J",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0277",
        "Name": "Hyndman, E",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Arsenal"
    }, {
        "ID": "0278",
        "Name": "Pugh, M",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0279",
        "Name": "Surman, A",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0280",
        "Name": "Gosling, D",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0281",
        "Name": "MacDonald, S",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0282",
        "Name": "Stanislas, J",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0283",
        "Name": "O'Kane, E",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0284",
        "Name": "Arter, H",
        "Position": "Midfielder",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    },

    // Burnley

    {
        "ID": "0285",
        "Name": "Kightly, M",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0286",
        "Name": "Gudmundsson, JB",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0287",
        "Name": "Ulvestad, F",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0288",
        "Name": "Arfield, S",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0289",
        "Name": "Boyd, G",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0290",
        "Name": "Jones, D",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0291",
        "Name": "Marney, D",
        "Position": "Midfielder",
        "TeamID": "0003",
        "TeamName": "Burnley"
    },

    // Chelsea

    {
        "ID": "0292",
        "Name": "van Ginkel, M",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0293",
        "Name": "Pedro",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0294",
        "Name": "Matic, N",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0295",
        "Name": "Loftus-Cheek, R",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0296",
        "Name": "Hyndman, E",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Arsenal"
    }, {
        "ID": "0297",
        "Name": "Willian",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0298",
        "Name": "Brown, I",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0299",
        "Name": "Traore, B",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0300",
        "Name": "Hazard, E",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0301",
        "Name": "Atsu, C",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0302",
        "Name": "Kenedy",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0303",
        "Name": "Nathan",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0304",
        "Name": "Oscar",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0305",
        "Name": "Mikel, J",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0306",
        "Name": "Moses, V",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0307",
        "Name": "Kante, N",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0308",
        "Name": "Fabregas, C",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0309",
        "Name": "Cuadrado, J",
        "Position": "Midfielder",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    },

        // Crystal Palace

    {
        "ID": "0310",
        "Name": "Zaha, W",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0311",
        "Name": "Sako, B",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0312",
        "Name": "Puncheon, J",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0313",
        "Name": "Townsend, A",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0314",
        "Name": "Cabaye, Y",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0315",
        "Name": "Jedinak, M",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0317",
        "Name": "McArthur, J",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0318",
        "Name": "Mutch, J",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0319",
        "Name": "Atsu, C",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0320",
        "Name": "Kaikai, S",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0321",
        "Name": "Williams, J",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0322",
        "Name": "Chung-yong, L",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0323",
        "Name": "Ledley, J",
        "Position": "Midfielder",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },

        // Everton

    {
        "ID": "0324",
        "Name": "Deulofeu, G",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0325",
        "Name": "Cleverley, T",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0326",
        "Name": "Besic, M",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0327",
        "Name": "Oviedo, B",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0328",
        "Name": "Barry, G",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0329",
        "Name": "McCarthy, J",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0330",
        "Name": "Gueye, I",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0331",
        "Name": "Lennon, A",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0332",
        "Name": "McGeady, A",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0333",
        "Name": "Mirallas, K",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0334",
        "Name": "Davies, T",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0335",
        "Name": "Barkley, R",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0336",
        "Name": "Gibson, D",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0316",
        "Name": "Bolasie, Y",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    },{
        "ID": "0388",
        "Name": "Schneiderlin, M",
        "Position": "Midfielder",
        "TeamID": "0006",
        "TeamName": "Everton"
    },

        // Hull

    {
        "ID": "0337",
        "Name": "Maloney, S",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0338",
        "Name": "Snodgrass, R",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0339",
        "Name": "Elmohamady, A",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0340",
        "Name": "Clucas, S",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0341",
        "Name": "Huddlestone, T",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0342",
        "Name": "Livermore, J",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    }, {
        "ID": "0343",
        "Name": "Meyler, D",
        "Position": "Midfielder",
        "TeamID": "0007",
        "TeamName": "Hull"
    },

        // Leicester City

    {
        "ID": "0344",
        "Name": "Drinkwater, D",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0345",
        "Name": "King, A",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0346",
        "Name": "Inler, G",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0347",
        "Name": "Albrighton, M",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0348",
        "Name": "Amartey, D",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0349",
        "Name": "Dyer, N",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0350",
        "Name": "Gray, D",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0351",
        "Name": "James, M",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0352",
        "Name": "Mahrez, R",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0353",
        "Name": "Kapustka, B",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0354",
        "Name": "Mendy, N",
        "Position": "Midfielder",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    },

        // Liverpool

    {
        "ID": "0355",
        "Name": "Coutinho, P",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0356",
        "Name": "Firmino, R",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0357",
        "Name": "Mane, S",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0358",
        "Name": "Stewart, K",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0359",
        "Name": "Can, E",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0360",
        "Name": "Dyer, N",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0361",
        "Name": "Wijnaldum, G",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0362",
        "Name": "Brannagan, C",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0363",
        "Name": "Ojo, O",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0364",
        "Name": "Alberto, L",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0365",
        "Name": "Markovic, L",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0366",
        "Name": "Henderson, J",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0367",
        "Name": "Leiva, L",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0368",
        "Name": "Milner, J",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0369",
        "Name": "Grujic, M",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0370",
        "Name": "Chirivella, P",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0371",
        "Name": "Lallana, A",
        "Position": "Midfielder",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    },

        // Manchester City

    {
        "ID": "0372",
        "Name": "Fernandinho",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0373",
        "Name": "Nasri, S",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0374",
        "Name": "Fernando",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0375",
        "Name": "de Bruyne, K",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0376",
        "Name": "Silva, D",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0377",
        "Name": "Delph, F",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0378",
        "Name": "Sane, L",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0379",
        "Name": "Garcia, M",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0380",
        "Name": "Toure, Y",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0381",
        "Name": "Sterling, R",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0382",
        "Name": "Zinchenko, O",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0383",
        "Name": "Gundogan, I",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0384",
        "Name": "Navas, J",
        "Position": "Midfielder",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    },

        // Manchester United

    {
        "ID": "0385",
        "Name": "Januzaj, A",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0386",
        "Name": "Carrick, M",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0387",
        "Name": "Young, A",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0389",
        "Name": "Lingard, J",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0390",
        "Name": "Riley, J",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0391",
        "Name": "Fellaini, M",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0392",
        "Name": "Depay, M",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0393",
        "Name": "Schweinsteiger, B",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0394",
        "Name": "Herrera, A",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0395",
        "Name": "Mata, J",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0396",
        "Name": "Mkhitaryan, H",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0397",
        "Name": "Weir, J",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0398",
        "Name": "Pogba, P",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0399",
        "Name": "Pereira, A",
        "Position": "Midfielder",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    },

        // Middlesbrough

    {
        "ID": "0400",
        "Name": "Carayol, M",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0401",
        "Name": "Clayton, A",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0402",
        "Name": "Forshaw, A",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0403",
        "Name": "de Roon, M",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0404",
        "Name": "Reach, A",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0405",
        "Name": "Adomah, A",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0406",
        "Name": "De Sart, J",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0407",
        "Name": "de Pena, C",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0408",
        "Name": "Ramirez, G",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0409",
        "Name": "Fischer, V",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0410",
        "Name": "Downing, S",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0411",
        "Name": "Leadbitter, G",
        "Position": "Midfielder",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    },

        // Southampton

    {
        "ID": "0412",
        "Name": "Davis, S",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0413",
        "Name": "Redmond, N",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0414",
        "Name": "Isgrove, L",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0415",
        "Name": "Romeu, O",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0416",
        "Name": "Tadic, D",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0417",
        "Name": "Reed, H",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0418",
        "Name": "Clasie, J",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0419",
        "Name": "Hojbjerg, P",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0420",
        "Name": "Hesketh, J",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0421",
        "Name": "Ward-Prowse, J",
        "Position": "Midfielder",
        "TeamID": "0013",
        "TeamName": "Southampton"
    },

        // Stoke City

    {
        "ID": "0422",
        "Name": "Whelan, G",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0423",
        "Name": "Imbula, G",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0424",
        "Name": "Shaqiri, X",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0425",
        "Name": "Molina, S",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0426",
        "Name": "Sobhi, R",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0427",
        "Name": "Ireland, S",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0428",
        "Name": "Afellay, I",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0429",
        "Name": "Allen, J",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0430",
        "Name": "Adam, C",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0431",
        "Name": "El Ouriachi, M",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0432",
        "Name": "Arnautovic, M",
        "Position": "Midfielder",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    },

        // Sunderland

    {
        "ID": "0433",
        "Name": "Larsson, S",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0434",
        "Name": "M'Vila, Y",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0435",
        "Name": "Bridcutt, L",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0436",
        "Name": "Rodwell, J",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0437",
        "Name": "Kirchhoff, J",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0438",
        "Name": "Ireland, S",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0439",
        "Name": "Gomez, J",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0440",
        "Name": "Lens, J",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0441",
        "Name": "Khazri, W",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0442",
        "Name": "Cattermole, L",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0443",
        "Name": "Mavrias, C",
        "Position": "Midfielder",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    },

        // Swansea City

    {
        "ID": "0444",
        "Name": "Fer, L",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0445",
        "Name": "Sung-Yueng, K",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0446",
        "Name": "Cork, J",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0447",
        "Name": "Barrow, M",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0448",
        "Name": "Fulton, J",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0449",
        "Name": "Britton, L",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0450",
        "Name": "Sigurdsson, G",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0451",
        "Name": "Montero, J",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    }, {
        "ID": "0452",
        "Name": "Routledge, W",
        "Position": "Midfielder",
        "TeamID": "0016",
        "TeamName": "Swansea City"
    },

        // Tottenham Hotspur

    {
        "ID": "0453",
        "Name": "Alli, D",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0454",
        "Name": "Dembele, M",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0455",
        "Name": "Winks, H",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0456",
        "Name": "N'Jie, C",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0457",
        "Name": "Lamela, E",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0458",
        "Name": "Mason, R",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0459",
        "Name": "Eriksen, C",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0460",
        "Name": "Onomah, J",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0461",
        "Name": "Wanyama, V",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0462",
        "Name": "Carroll, T",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0463",
        "Name": "Bentaleb, N",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0464",
        "Name": "Dier, E",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0465",
        "Name": "Chadli, N",
        "Position": "Midfielder",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    },

        // Watford

    {
        "ID": "0466",
        "Name": "Anya, I",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0467",
        "Name": "Amrabat, N",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0468",
        "Name": "Guedioura, A",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0469",
        "Name": "Murray, S",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0470",
        "Name": "Capoue, E",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0471",
        "Name": "Behrami, V",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0472",
        "Name": "Watson, B",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0473",
        "Name": "Suarez, M",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0474",
        "Name": "Doucoure, A",
        "Position": "Midfielder",
        "TeamID": "0018",
        "TeamName": "Watford"
    },

        // West Bromwich Albion

    {
        "ID": "0475",
        "Name": "Gardner, C",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0476",
        "Name": "Phillips, M",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0477",
        "Name": "Yacob, C",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0478",
        "Name": "Brunt, C",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0479",
        "Name": "McClean, J",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0480",
        "Name": "Morrison, J",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0481",
        "Name": "McManaman, C",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0482",
        "Name": "Leko, J",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0483",
        "Name": "Fletcher, D",
        "Position": "Midfielder",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    },

        // West Ham United

    {
        "ID": "0484",
        "Name": "Antonio, M",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0485",
        "Name": "Poyet, D",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0486",
        "Name": "Feghouli, S",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0487",
        "Name": "Lanzini, M",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0488",
        "Name": "Nordtveit, H",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0489",
        "Name": "Ayew, A",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0490",
        "Name": "Noble, M",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0491",
        "Name": "Obiang, P",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0492",
        "Name": "Kouyate, C",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0493",
        "Name": "Payet, D",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0494",
        "Name": "Tore, G",
        "Position": "Midfielder",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    },


    //// FORWARDS ////

    // Arsenal

    {
        "ID": "0495",
        "Name": "Giroud, O",
        "Position": "Forward",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0496",
        "Name": "Sanogo, Y",
        "Position": "Forward",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0497",
        "Name": "Welbeck, D",
        "Position": "Forward",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    }, {
        "ID": "0498",
        "Name": "Akpom, C",
        "Position": "Forward",
        "TeamID": "0001",
        "TeamName": "Arsenal"
    },

    // Bournemouth

    {
        "ID": "0499",
        "Name": "Grabban, L",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0500",
        "Name": "Mousset, L",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0501",
        "Name": "Afobe, B",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0502",
        "Name": "Rantie, T",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0503",
        "Name": "Wilson, C",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    }, {
        "ID": "0504",
        "Name": "King, J",
        "Position": "Forward",
        "TeamID": "0002",
        "TeamName": "Bournemouth"
    },

    // Burnley

    {
        "ID": "0505",
        "Name": "Vokes, S",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0506",
        "Name": "Hennings, R",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0507",
        "Name": "Barnes, A",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0508",
        "Name": "Long, C",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0509",
        "Name": "Gray, A",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    }, {
        "ID": "0510",
        "Name": "Jutkiewicz, L",
        "Position": "Forward",
        "TeamID": "0003",
        "TeamName": "Burnley"
    },

    // Chelsea

    {
        "ID": "0511",
        "Name": "Costa, D",
        "Position": "Forward",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0512",
        "Name": "Remy, L",
        "Position": "Forward",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    }, {
        "ID": "0513",
        "Name": "Batshuayi, M",
        "Position": "Forward",
        "TeamID": "0004",
        "TeamName": "Chelsea"
    },

    // Crystal Palace

    {
        "ID": "0514",
        "Name": "Campbell, F",
        "Position": "Forward",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0515",
        "Name": "Wickham, C",
        "Position": "Forward",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    }, {
        "ID": "0516",
        "Name": "Appiah, K",
        "Position": "Forward",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },{
        "ID": "0535",
        "Name": "Benteke, C",
        "Position": "Forward",
        "TeamID": "0005",
        "TeamName": "Crystal Palace"
    },

    // Everton

    {
        "ID": "0518",
        "Name": "McAleny, C",
        "Position": "Forward",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0519",
        "Name": "Lukaku, R",
        "Position": "Forward",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0520",
        "Name": "Rodriguez, L",
        "Position": "Forward",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0521",
        "Name": "Sambou, B",
        "Position": "Forward",
        "TeamID": "0006",
        "TeamName": "Everton"
    }, {
        "ID": "0522",
        "Name": "Kone, A",
        "Position": "Forward",
        "TeamID": "0006",
        "TeamName": "Everton"
    },

    // Hull City

    {
        "ID": "0523",
        "Name": "Luer, G",
        "Position": "Forward",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0524",
        "Name": "Diomande, A",
        "Position": "Forward",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0525",
        "Name": "Hernandez, A",
        "Position": "Forward",
        "TeamID": "0007",
        "TeamName": "Hull City"
    }, {
        "ID": "0526",
        "Name": "Jahraldo-Martin, C",
        "Position": "Forward",
        "TeamID": "0007",
        "TeamName": "Hull City"
    },{
        "ID": "0517",
        "Name": "Niasse, O",
        "Position": "Forward",
        "TeamID": "0007",
        "TeamName": "Hull City"
    },

    // Leicester City

    {
        "ID": "0527",
        "Name": "Musa, A",
        "Position": "Forward",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0528",
        "Name": "Vardy, J",
        "Position": "Forward",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0529",
        "Name": "Ulloa, L",
        "Position": "Forward",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0530",
        "Name": "Okazaki, S",
        "Position": "Forward",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    }, {
        "ID": "0531",
        "Name": "Lawrence, T",
        "Position": "Forward",
        "TeamID": "0008",
        "TeamName": "Leicester City"
    },

    // Liverpool

    {
        "ID": "0532",
        "Name": "Ings, D",
        "Position": "Forward",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0533",
        "Name": "Sturridge, D",
        "Position": "Forward",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0534",
        "Name": "Origi, D",
        "Position": "Forward",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0536",
        "Name": "Woodburn, B",
        "Position": "Forward",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    }, {
        "ID": "0537",
        "Name": "Balotelli, M",
        "Position": "Forward",
        "TeamID": "0009",
        "TeamName": "Liverpool"
    },

    // Manchester City

    {
        "ID": "0538",
        "Name": "Aguero, S",
        "Position": "Forward",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0539",
        "Name": "Nolito",
        "Position": "Forward",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    }, {
        "ID": "0541",
        "Name": "Iheanacho, K",
        "Position": "Forward",
        "TeamID": "0010",
        "TeamName": "Manchester City"
    },

    // Manchester United

    {
        "ID": "0542",
        "Name": "Rashford, M",
        "Position": "Forward",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0543",
        "Name": "Wilson, J",
        "Position": "Forward",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0544",
        "Name": "Martial, A",
        "Position": "Forward",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0545",
        "Name": "Rooney, W",
        "Position": "Forward",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    }, {
        "ID": "0546",
        "Name": "Ibrahimovic, Z",
        "Position": "Forward",
        "TeamID": "0011",
        "TeamName": "Manchester United"
    },

    // Middlesbrough

    {
        "ID": "0547",
        "Name": "Nugent, D",
        "Position": "Forward",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0548",
        "Name": "Rhodes, J",
        "Position": "Forward",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0549",
        "Name": "Stuani, C",
        "Position": "Forward",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    }, {
        "ID": "0550",
        "Name": "Negredo, A",
        "Position": "Forward",
        "TeamID": "0012",
        "TeamName": "Middlesbrough"
    },

    // Southampton

    {
        "ID": "0551",
        "Name": "Gallagher, S",
        "Position": "Forward",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0552",
        "Name": "Rodriguez, J",
        "Position": "Forward",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0553",
        "Name": "Long, S",
        "Position": "Forward",
        "TeamID": "0013",
        "TeamName": "Southampton"
    }, {
        "ID": "0554",
        "Name": "Austin, C",
        "Position": "Forward",
        "TeamID": "0013",
        "TeamName": "Southampton"
    },

    // Stoke City

    {
        "ID": "0555",
        "Name": "Joselu",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0556",
        "Name": "Krkic, B",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0557",
        "Name": "Walters, J",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    }, {
        "ID": "0558",
        "Name": "Diouf, M",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    },{
        "ID": "0559",
        "Name": "Crouch, P",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    },{
        "ID": "0540",
        "Name": "Bony, W",
        "Position": "Forward",
        "TeamID": "0014",
        "TeamName": "Stoke City"
    },

    // Sunderland

    {
        "ID": "0560",
        "Name": "Borini, F",
        "Position": "Forward",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0561",
        "Name": "Watmore, D",
        "Position": "Forward",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    }, {
        "ID": "0562",
        "Name": "Defoe, J",
        "Position": "Forward",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    },
    {
        "ID": "0582",
        "Name": "Anichebe, V",
        "Position": "Forward",
        "TeamID": "0015",
        "TeamName": "Sunderland"
    },

    // Swansea

    {
        "ID": "0563",
        "Name": "Emnes, M",
        "Position": "Forward",
        "TeamID": "0016",
        "TeamName": "Swansea"
    }, {
        "ID": "0564",
        "Name": "Llorente, F",
        "Position": "Forward",
        "TeamID": "0016",
        "TeamName": "Swansea"
    },

    // Tottenham Hotspur

    {
        "ID": "0565",
        "Name": "Kane, H",
        "Position": "Forward",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0566",
        "Name": "Janssen, V",
        "Position": "Forward",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    }, {
        "ID": "0567",
        "Name": "Heung-Min, S",
        "Position": "Forward",
        "TeamID": "0017",
        "TeamName": "Tottenham Hotspur"
    },

    // Watford

    {
        "ID": "0568",
        "Name": "Deeney, T",
        "Position": "Forward",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0569",
        "Name": "Vydra, M",
        "Position": "Forward",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0570",
        "Name": "Success, I",
        "Position": "Forward",
        "TeamID": "0018",
        "TeamName": "Watford"
    },{
        "ID": "0571",
        "Name": "Ighalo, O",
        "Position": "Forward",
        "TeamID": "0018",
        "TeamName": "Watford"
    }, {
        "ID": "0572",
        "Name": "Jakubiak, A",
        "Position": "Forward",
        "TeamID": "0018",
        "TeamName": "Watford"
    },

    // West Bromwich Albion

    {
        "ID": "0573",
        "Name": "Rondon, S",
        "Position": "Forward",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0574",
        "Name": "Lambert, R",
        "Position": "Forward",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    }, {
        "ID": "0575",
        "Name": "Berahino, S",
        "Position": "Forward",
        "TeamID": "0019",
        "TeamName": "West Bromwich Albion"
    },

    // West Ham United

    {
        "ID": "0576",
        "Name": "Valencia, E",
        "Position": "Forward",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0577",
        "Name": "Sakho, D",
        "Position": "Forward",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0578",
        "Name": "Fletcher, A",
        "Position": "Forward",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0579",
        "Name": "Carroll, A",
        "Position": "Forward",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    }, {
        "ID": "0580",
        "Name": "Martinez, T",
        "Position": "Forward",
        "TeamID": "0020",
        "TeamName": "West Ham United"
    },

]


var $selectedTeam = null,
    $selectedFixture = null,
    $tableHeading = null,
    $teamPosition = null,
    $teamPositionTable = null,

    $teamDropdown = null,
    $dropdownOption = null,

    $score = null,
    $total = 0;


// Find each team and populate the dropdowns
function populateTeams() {

    for (var i = 0; i < Teams.length; i++) {

        var $dropdownOption = $('<option>' + Teams[i].Name + '</option>');

        $dropdownOption.attr({
            'data-id': Teams[i].ID,
        });
        $teamDropdown.append($dropdownOption);

    }
}

// If team has been selected enable scores otherwise disable
function enableScore() {

    $($teamDropdown).each(function () {

        if ($(this).val()) {

            $(this).siblings($score).attr('disabled', false);

        } else {
            $(this).siblings($score).attr('disabled', true);
        }
    });
}

function calculatePoints() {

    // Loop through each player from the selected fixtures
    $('.player-data').each(function () {

        // Create calculation variables
        var goalsTotal = 0,
            cleanSheetTotal = 0,
            redCardTotal = 0,
            pointsTotal = 0,
            goalsScored = parseInt($(this).find('.score-select :selected').val());

        // If clean sheet checkbox is checked set the cleanSheetTotal
        if ($(this).find('.clean-sheet-checkbox').is(':checked')) {

            // If the position of the current player loop is 'Goalkeeper' set the cleanSheetTotal to 5
            if (($(this).attr('data-position') == 'Goalkeeper')) {
                cleanSheetTotal = 5;
            }

            // If the position of the current player loop is 'Defender' set the cleanSheetTotal to 10
            if (($(this).attr('data-position') == 'Defender')) {
                cleanSheetTotal = 2;
            }
        }

        // If the red card checkbox is selected set the redCardTotal to 10
        if ($(this).find('.red-card-checkbox').is(':checked')) {
            redCardTotal = 10;

            // Add attribute to current player if sent off
            $(this).attr('data-sentoff', 'true');
        } else {
          $(this).removeAttr('data-sentoff');
        }

        // If the position of the current player loop is 'Goalkeeper' set the goalsTotal
        if ($(this).attr('data-position') == 'Goalkeeper') {

            if (goalsScored > 0) {
                $(this).find('.score-select').addClass('active');
            } else {
                $(this).find('.score-select').removeClass('active');
            }

            // Multiple the goals total by 10 if its a Goalkeeper
            goalsTotal = goalsScored * 10;

            // If 2 or more goals are scored add 5 to the goalsTotal
            if (goalsScored == 2) {
                goalsTotal = goalsTotal + 5;

                // If 3 or more goals are scored add 10 to the goalsTotal
            } else if ((goalsScored >= 3)) {
                goalsTotal = goalsTotal + 10;
            }

            // If the position of the current player loop is 'Defender' set the goalsTotal
        } else if ($(this).attr('data-position') == 'Defender') {

            if (goalsScored > 0) {
                $(this).find('.score-select').addClass('active');
            } else {
                $(this).find('.score-select').removeClass('active');
            }

            // Multiple the goals total by 7 if its a Defender
            goalsTotal = goalsScored * 7;

            // If 2 or more goals are scored add 5 to the goalsTotal
            if (goalsScored == 2) {
                goalsTotal = goalsTotal + 5;

                // If 3 or more goals are scored add 10 to the goalsTotal
            } else if ((goalsScored >= 3)) {
                goalsTotal = goalsTotal + 10;
            }

            // If the position of the current player loop is 'Midfielder' set the goalsTotal
        } else if ($(this).attr('data-position') == 'Midfielder') {

            if (goalsScored > 0) {
                $(this).find('.score-select').addClass('active');
            } else {
                $(this).find('.score-select').removeClass('active');
            }

            // Multiple the goals total by 5 if its a Midfielder
            goalsTotal = goalsScored * 5;

            // If 2 or more goals are scored add 5 to the goalsTotal
            if (goalsScored >= 2) {
                goalsTotal = goalsTotal + 5;

                // If 3 or more goals are scored add 10 to the goalsTotal
            } else if ((goalsScored >= 3)) {
                goalsTotal = goalsTotal + 10;
            }

            // If the position of the current player loop is 'Forward' set the goalsTotal
        } else if ($(this).attr('data-position') == 'Forward') {

            if (goalsScored > 0) {
                $(this).find('.score-select').addClass('active');
            } else {
                $(this).find('.score-select').removeClass('active');
            }

            // Multiple the goals total by 3 if its a Forward
            goalsTotal = goalsScored * 3;

            // If 2 or more goals are scored add 5 to the goalsTotal
            if (goalsScored == 2) {
                goalsTotal = goalsTotal + 5;

                // If 3 or more goals are scored add 10 to the goalsTotal
            } else if ((goalsScored >= 3)) {
                goalsTotal = goalsTotal + 15;
            }

        }

        // Create a variable by adding the totals of all calculation variables
        var pointsTotal = goalsTotal + cleanSheetTotal - redCardTotal;

        // Create an attribute on the player table row and set it to the pointsTotal
        $(this).attr('data-points', pointsTotal);

    });

}

function updatePlayerData() {

    // Loop through each player in the teams table
    $('.player-total-data').each(function () {

        // Create player ID variable from the ID text
        var playerID = $(this).find('.id').text();

        // Add attribute to table using previous variable
        $(this).attr('data-player-id', playerID);

        // Filter through all player data and return the matching player from variable ID
        var matchingPlayerID = $('.player-data').filter(function () {
            return $(this).attr('data-id') == playerID;
        });

        // Create a variable for the points from the filtered player
        var matchingPlayerPoints = matchingPlayerID.attr('data-points');

        // Set the points using the filtered player points data
        $(this).find('.points').text(matchingPlayerPoints);

        // Check if the filtered player sent off attribute is true
        if ($(matchingPlayerID).attr('data-sentoff') == 'true') {

          // If true, add a class to the current loop
          $(this).addClass('sent-off');

        } else {

          // Else , remove the class
          $(this).removeClass('sent-off');
        }

    });

}

function updatePointsTotal() {

    $total = 0;

    $('.teams table').each(function () {

        $total = 0;

        $(this).find('.points').each(function () {

            $total += parseInt(($(this).text()));

        });


        $(this).find('.total-points').text($total);

    });
}

function teamPointUpdates() {

    calculatePoints();

    updatePlayerData();

    updatePointsTotal();

}

$(function () {

    // Variables
    $teamDropdown = $('.teams-dropdown'),
        $tableHeading = '<tr class="table-heading"><th>ID</th><th>Players</th><th><img class="goals-image disabled" src="Images/football.png" title="Goals Scored" alt="Goals Scored"></th><th><img class="clean-sheet-image" src="Images/clean_sheet.png" title="Clean Sheet" alt="Clean Sheet"></th><th><img class="red-card-image" src="Images/red_card.png" Title="Red Card" alt="Red Card"></th></tr>',
        $score = $('.score');
    $total = 0;

    // Find each team and populate the dropdowns
    populateTeams();

    // If team has been selected enable scores otherwise disable
    enableScore();

    $('.teams-dropdown').change(function () {

        // Create scoped variables
        var _selectedTeam = $(this).find(':selected').attr('data-id'),
            _playerTableClass = '.' + $(this).parent().attr('class') + '-players',
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _playerTable = _selectedFixture + ' .' + $(this).parent().attr('class') + '-players' + ' table';

        // Empty the selected table and append the table heading
        $(_playerTable).empty();

        // Loop through each player in the players array
        for (var i = 0; i < Players.length; i++) {

            // Create a variable for the Players Team ID
            var _playersTeamID = Players[i].TeamID;

            // Check if the players ID matches the selected teams ID
            if (_playersTeamID == _selectedTeam) {

                // Create a row with the players data and the fields
                var _players = '<tr class="player-data" data-points="' + '0' + '" data-position="' + Players[i].Position + '" data-id="' + Players[i].ID + '"><td>' + Players[i].ID + '</td><td>' + Players[i].Name + '</td><td class="goals-scored"><select class="score-select disabled" disabled="disabled" name="score"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td><td class="clean-sheet"><input type="checkbox" class="clean-sheet-checkbox" data-points="5" id="1" name="Mignolet" value=" "></td><td class="red-card"><input type="checkbox" class="red-card-checkbox" name="Mignolet" value=" "></td></tr>'

                // Append to the correct table
                $(_playerTable).append(_players);

            }

        }

        $(_playerTable).find('.player-data[data-position="Goalkeeper"]').first().before('<tr class="goalkeeper-header"><th colspan="5">Goalkeepers</th></tr>').before($tableHeading);
        $(_playerTable).find('.player-data[data-position="Defender"]').first().before('<tr class="defender-header"><th colspan="5">Defenders</th></tr>').before($tableHeading);
        $(_playerTable).find('.player-data[data-position="Midfielder"]').first().before('<tr class="midfielder-header"><th colspan="5">Midfielders</th></tr>').before($tableHeading);
        $(_playerTable).find('.player-data[data-position="Forward"]').first().before('<tr class="forward-header"><th colspan="5">Forwards</th></tr>').before($tableHeading);

        // Loop through each player
        $(_playerTableClass).find('.player-data').each(function () {



            if (!$(this).siblings('tr').find('.clean-sheet-image').hasClass('disabled')) {

                // If the player is a Midfielder or Forward then disable the clean sheet checkbox
                if (($(this).attr('data-position') == 'Midfielder' || $(this).attr('data-position') == 'Forward')) {
                    $(this).find('.clean-sheet input[type="checkbox"]').attr('disabled', true);
                }

            } else {
                $(this).find('.clean-sheet input[type="checkbox"]').attr('disabled', true);
            }

        });

        // If team has been selected enable scores otherwise disable (This needs to executed on dropdown change so that the scores can be enabled)
        enableScore();

        teamPointUpdates();

    });


    $($score).change(function () {

        // Create scoped variables
        var _teamPosition = '.' + $(this).parent().attr('class'),
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _playerTableClass = '.' + $(this).parent().attr('class') + '-players',
            _playerScores = $(_selectedFixture + " " + _playerTableClass).find('.goals-scored select');

        // Check if the selected team is the home team
        if ($(_selectedFixture + " " + _teamPosition).attr('class') == 'home-team') {

            // Check if home teams score is greater than 0
            if ($(_selectedFixture + " " + _teamPosition).find('.score option:selected').val() > 0) {

                // Disable all clean sheet checkboxes for the away team of this fixture
                $(_selectedFixture).find('.away-team-players .clean-sheet input[type="checkbox"]').attr('disabled', true).removeAttr('checked');
                // Set the opacity of the clean sheet image to 0.3
                $(_selectedFixture).find('.away-team-players .clean-sheet-image').addClass('disabled');

                // Enable all score select boxes and remove disabled class
                $(_selectedFixture).find('.home-team-players .score-select').attr('disabled', false);
                $(_selectedFixture).find('.home-team-players .score-select').removeClass('disabled');
                $(_selectedFixture).find('.home-team-players .goals-image').removeClass('disabled');

            } else {
                // Enable all clean sheet checkboxes for the away team of this fixture
                $(_selectedFixture).find('.away-team-players .clean-sheet input[type="checkbox"]').attr('disabled', false);
                // Set the opacity of the clean sheet image to 1
                $(_selectedFixture).find('.away-team-players .clean-sheet-image').removeClass('disabled');

                // Disable all score select boxes and add disabled class
                $(_selectedFixture).find('.home-team-players .score-select').attr('disabled', true);
                $(_selectedFixture).find('.home-team-players .score-select').addClass('disabled');
                $(_selectedFixture).find('.home-team-players .goals-image').addClass('disabled');
            }

            // Loop through each player (This needs to be done again as the previous action may have enabled all checkboxes)
            $(_selectedFixture).find('.away-team-players .player-data').each(function () {

                // If the player is a Midfielder or Forward then disable the clean sheet checkbox
                if (($(this).attr('data-position') == 'Midfielder' || $(this).attr('data-position') == 'Forward')) {
                    $(this).find('.clean-sheet input[type="checkbox"]').attr('disabled', true);
                }

            });

            // Check if the selected team is the away team
        } else if ($(_selectedFixture + " " + _teamPosition).attr('class') == 'away-team') {

            // Check if away teams score is greater than 0
            if ($(_selectedFixture + " " + _teamPosition).find('.score option:selected').val() > 0) {

                // Disable all clean sheet checkboxes for the home team of this fixture
                $(_selectedFixture).find('.home-team-players .clean-sheet input[type="checkbox"]').attr('disabled', true).removeAttr('checked');
                // Set the opacity of the clean sheet image to 0.3
                $(_selectedFixture).find('.home-team-players .clean-sheet-image').addClass('disabled');

                // Enable all score select boxes
                $(_selectedFixture).find('.away-team-players .score-select').attr('disabled', false);
                $(_selectedFixture).find('.away-team-players .score-select').removeClass('disabled');
                $(_selectedFixture).find('.away-team-players .goals-image').removeClass('disabled');

            } else {
                // Enable all clean sheet checkboxes for the home team of this fixture
                $(_selectedFixture).find('.home-team-players .clean-sheet input[type="checkbox"]').attr('disabled', false);
                // Set the opacity of the clean sheet image to 1
                $(_selectedFixture).find('.home-team-players .clean-sheet-image').removeClass('disabled');

                // Disable all score select boxes
                $(_selectedFixture).find('.away-team-players .score-select').attr('disabled', true);
                $(_selectedFixture).find('.away-team-players .score-select').addClass('disabled');
                $(_selectedFixture).find('.away-team-players .goals-image').addClass('disabled');
            }

            // Loop through each player (This needs to be done again as the previous action may have enabled all checkboxes)
            $($(_selectedFixture)).find('.home-team-players .player-data').each(function () {

                // If the player is a Midfielder or Forward then disable the clean sheet checkbox
                if (($(this).attr('data-position') == 'Midfielder' || $(this).attr('data-position') == 'Forward')) {
                    $(this).find('.clean-sheet input[type="checkbox"]').attr('disabled', true);
                }

            });
        }

        teamPointUpdates();

    });

    $('body').on('click', '.goalkeeper-header', function () {

        var _playerTableClass = '.' + $(this).parents('div').attr('class'),
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _tableHeading = $(this).next('.table-heading');

        $(this).toggleClass('active');
        $(_tableHeading).toggleClass('active');

        $(_selectedFixture).find(_playerTableClass).find('.player-data').each(function () {
            if ($(this).data('position') == "Goalkeeper") {
                $(this).toggleClass('active');
            }
        });

    });

    $('body').on('click', '.defender-header', function () {

        var _playerTableClass = '.' + $(this).parents('div').attr('class'),
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _tableHeading = $(this).next('.table-heading');

            $(this).toggleClass('active');
            $(_tableHeading).toggleClass('active');

        $(_selectedFixture).find(_playerTableClass).find('.player-data').each(function () {
            if ($(this).data('position') == "Defender") {
                $(this).toggleClass('active');

            }
        });

    });

    $('body').on('click', '.midfielder-header', function () {

        var _playerTableClass = '.' + $(this).parents('div').attr('class'),
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _tableHeading = $(this).next('.table-heading');

            $(this).toggleClass('active');
            $(_tableHeading).toggleClass('active');

        $(_selectedFixture).find(_playerTableClass).find('.player-data').each(function () {
            if ($(this).data('position') == "Midfielder") {
                $(this).toggleClass('active');
            }
        });

    });

    $('body').on('click', '.forward-header', function () {

        var _playerTableClass = '.' + $(this).parents('div').attr('class'),
            _selectedFixture = '#' + $(this).closest('.fixtures').attr('id'),
            _tableHeading = $(this).next('.table-heading');

            $(this).toggleClass('active');
            $(_tableHeading).toggleClass('active');

        $(_selectedFixture).find(_playerTableClass).find('.player-data').each(function () {
            if ($(this).data('position') == "Forward") {
                $(this).toggleClass('active');
            }
        });

    });

    $(document).on('change', '.clean-sheet-checkbox', function () {

        teamPointUpdates();

    });

    $(document).on('change', '.red-card-checkbox', function () {

        teamPointUpdates();

    });



    $(document).on('change', '.score-select', function () {

        teamPointUpdates();

    });


});
