// Preload Images

function preloadImages(images) {
    if (typeof cachedImages !== 'object')
        window.cachedImages = new Array();

    var cl = cachedImages.length,
        il = cl + images.length;

    for (i = cl; i < il; i++) {
        cachedImages[i] = new Image();
        cachedImages[i].src = images[i - cl];
    }
}

// JSON Data

var Keepers = [
    {
        "ID": "0001",
        "Position": "Goalkeeper",
        "Name": "De Gea",
        "Club": "Manchester United",
        "Price": "8"
    },
    {
        "ID": "0002",
        "Position": "Goalkeeper",
        "Name": "Mignolet",
        "Club": "Liverpool",
        "Price": "5.5"
    },
    {
        "ID": "0003",
        "Position": "Goalkeeper",
        "Name": "Hart",
        "Club": "Man City",
        "Price": "6"
    },
    {
        "ID": "0004",
        "Position": "Goalkeeper",
        "Name": "Courtois",
        "Club": "Chelsea",
        "Price": "7"
    }
];


var Defenders = [
    {
        "ID": "0005",
        "Position": "Defender",
        "Name": "Rojo",
        "Club": "Manchester United",
        "Price": "4"
    },
    {
        "ID": "0006",
        "Position": "Defender",
        "Name": "Sahko",
        "Club": "Liverpool",
        "Price": "5.5"
    },
    {
        "ID": "0007",
        "Position": "Defender",
        "Name": "Kompany",
        "Club": "Man City",
        "Price": "8"
    },
    {
        "ID": "0008",
        "Position": "Defender",
        "Name": "Terry",
        "Club": "Chelsea",
        "Price": "7"
    }
];

var Midfielders = [
    {
        "ID": "0009",
        "Position": "Midfielder",
        "Name": "Herrara",
        "Club": "Manchester United",
        "Price": "7"
    },
    {
        "ID": "0010",
        "Position": "Midfielder",
        "Name": "Henderson",
        "Club": "Liverpool",
        "Price": "6"
    },
    {
        "ID": "0011",
        "Position": "Midfielder",
        "Name": "Hazard",
        "Club": "Chelsea",
        "Price": "8"
    },
    {
        "ID": "0012",
        "Position": "Midfielder",
        "Name": "Silva",
        "Club": "Man City",
        "Price": "8.5"
    }
];

var Forwards = [
    {
        "ID": "0013",
        "Position": "Forward",
        "Name": "Rooney",
        "Club": "Manchester United",
        "Price": "7"
    },
    {
        "ID": "0014",
        "Position": "Forward",
        "Name": "Sturridge",
        "Club": "Liverpool",
        "Price": "6"
    },
    {
        "ID": "0015",
        "Position": "Forward",
        "Name": "Aguero",
        "Club": "Man City",
        "Price": "9"
    },
    {
        "ID": "0016",
        "Position": "Forward",
        "Name": "Costa",
        "Club": "Chelsea",
        "Price": "8"
    }
];

var selectedPlayers = [];

var activeFunction = '';

// Variables

var $dropdown = null;
$keeper = null;
$defender = null;
$midfielder = null;
$forward = null;
$playerContainer = null;
$selectedContainer = null;

// Keeper Function

function populateKeepers() {

    $dropdown.show();
    $dropdown.empty();
    $dropdown.append('<option selected style="display:none;">Keepers</option>');

    var filteredKeepers = Keepers.filter(function (obj) {
        var playerExists = false;
        $.each(selectedPlayers, function () {
            playerExists = (this.ID == obj.ID) ? true : false;
        });
        return !playerExists;
    });

    for (i = 0; i < filteredKeepers.length; i++) {
        var $option = $('<option>' + filteredKeepers[i].Name + '</option>');
        $option.attr({
            'data-id': filteredKeepers[i].ID,
            'data-club': filteredKeepers[i].Club,
            'data-name': filteredKeepers[i].Name,
            'data-price': filteredKeepers[i].Price
        });
        $dropdown.append($option);
    }

    populateKeeperTable()
}

//
function populateKeeperTable() {

    var $keeperRow = $('.keeper');



    if ($keeperRow.length < 1 || !$keeperRow.text() == 'Team') {
        $keeperRow.show();
    } else {
        console.log('fail');
    }

}

// Defender Function

function populateDefenders() {
    $dropdown.show();
    $dropdown.empty();
    $dropdown.append('<option selected>Defenders</option>');

    var filteredDefenders = Defenders.filter(function (obj) {
        for (var i = 0, l = selectedPlayers.length; i < l; i++) {
            var _player = selectedPlayers[i];

            if (_player.ID == obj.ID) {
                return false;
            }
        }

        return true;
    });

    for (var i = 0, l = filteredDefenders.length; i < l; i++) {
        var $option = $('<option>' + filteredDefenders[i].Name + '</option>').attr({
            'data-id': filteredDefenders[i].ID,
            'data-club': filteredDefenders[i].Club,
            'data-name': filteredDefenders[i].Name,
            'data-price': filteredDefenders[i].Price
        });

        $dropdown.append($option);
    }
}

// Midfielder Function

function populateMidfielders() {
    $dropdown.show();
    $dropdown.empty();
    $dropdown.append('<option selected>Midfielders</option>');

    var filteredMidfielders = Midfielders.filter(function (obj) {
        for (var i = 0, l = selectedPlayers.length; i < l; i++) {
            var _player = selectedPlayers[i];

            if (_player.ID == obj.ID) {
                return false;
            }
        }

        return true;
    });

    for (var i = 0, l = filteredMidfielders.length; i < l; i++) {
        var $option = $('<option>' + filteredMidfielders[i].Name + '</option>').attr({
            'data-id': filteredMidfielders[i].ID,
            'data-club': filteredMidfielders[i].Club,
            'data-name': filteredMidfielders[i].Name,
            'data-price': filteredMidfielders[i].Price
        });

        $dropdown.append($option);
    }
}

// Forward Function

function populateForwards() {
    $dropdown.show();
    $dropdown.empty();
    $dropdown.append('<option selected>Forwards</option>');

    var filteredForwards = Forwards.filter(function (obj) {
        for (var i = 0, l = selectedPlayers.length; i < l; i++) {
            var _player = selectedPlayers[i];

            if (_player.ID == obj.ID) {
                return false;
            }
        }

        return true;
    });

    for (var i = 0, l = filteredForwards.length; i < l; i++) {
        var $option = $('<option>' + filteredForwards[i].Name + '&nbsp&nbsp' + filteredForwards[i].Price + 'mill ' + '</option>').attr({
            'data-id': filteredForwards[i].ID,
            'data-club': filteredForwards[i].Club,
            'data-name': filteredForwards[i].Name,
            'data-price': filteredForwards[i].Price
        });

        $dropdown.append($option);
    }
}

//function removePlayer() {

//    if ($('.player-container').text() == 'Team') {
//        $('<div class="remove-icon">' + '</div>').appendTo($('.player-container'));
//    }
//}

$(function () {

    // Variables

    $dropdown = $('.players');
    $keeper = $('.keeper');
    $defender = $('.defender');
    $midfielder = $('.midfield');
    $forward = $('.forward');
    $playerContainer = ('.player-container');
    $removeButton = ('.remove-button');
    $selectedContainer = null;

    // Keeper Dropdown

    $keeper.on('click', function (evt) {
        evt.preventDefault();

        activeFunction = 'populateKeepers';

        populateKeepers();

        $selectedContainer = $(this);

    });


    // Defender Dropdown

    $defender.on('click', function (evt) {
        evt.preventDefault();

        activeFunction = 'populateDefenders';

        populateDefenders();

        $selectedContainer = $(this);

    });

    // Midfield Dropdown

    $midfielder.on('click', function (evt) {
        evt.preventDefault();

        activeFunction = 'populateMidfielders';

        populateMidfielders();

        $selectedContainer = $(this);
    });

    // Forward Dropdown

    $forward.on('click', function (evt) {
        evt.preventDefault();

        activeFunction = 'populateForwards';

        populateForwards();

        $selectedContainer = $(this);
    });

    // Pull data from selected dropdown and replace on selected card

    $dropdown.on('change', function () {

        var $selectedOption = $(this).find(":selected");

        var currentPlayer = {
            'ID': $selectedContainer.data('id'),
            'Name': $selectedContainer.find('.name').text()
        };

        var newPlayer = {
            'ID': $selectedOption.data('id'),
            'Name': $selectedOption.data('name'),
            'Club': $selectedOption.data('club'),
            'Price': $selectedOption.data('price')
        };

        selectedPlayers = selectedPlayers.filter(function (obj) {
            return obj.ID !== currentPlayer.ID;
        });

        selectedPlayers.push(newPlayer);

        $selectedContainer.data('id', newPlayer.ID);
        $selectedContainer.find('.club').text(newPlayer.Club);
        $selectedContainer.find('.name').text(newPlayer.Name);
        $selectedContainer.find('.price').text(newPlayer.Price + ' mill');
        getPrice();

        var className;

        switch ($selectedContainer.find('.club').text()) {

            case "Liverpool":
                className = 'liverpool';
                break;

            case "Chelsea":
                className = 'chelsea';
                break;

            case "Arsenal":
                className = 'arsenal';
                break;

            case "Manchester United":
                className = 'manutd';
                break;

            case "Man City":
                className = 'mancity';
                break;
        }

        $selectedContainer.removeClass().addClass('player-container active ' + className);


        window[activeFunction]();

    });

    // Add a highlight to the selected player card
    $($playerContainer).click(function (e) {
        e.stopPropagation();

        if (!$(this).hasClass('active')) {
            $('.player-container').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Add remove button once selected
    $($playerContainer).click(function (e) {
        e.stopPropagation();

        if ($(this).text == 'Team') {
            console.log('false');
        } else {
            console.log('true');
            $(this).append('<div class="remove-button">' + '</div>');
        }
    });

    // Remove button click action
    $($removeButton).click(function (e) {
        e.stopPropagation();

        $(this).parent().removeClass();
    });

    // Preload images

    preloadImages([
        '/Images/liverpool_football_club.png',
        '/Images/arsenal_football_club.png',
        '/Images/chelsea_football_club.png',
        '/Images/manutd_football_club.png',
        '/Images/liverpool_football_club.png',
        '/Images/mancity_football_club.png'
    ]);


});

function getPrice() {

    var totalPrice = 0;

    $(".player-container").each(function (index) {
        var price = parseFloat($(this).find('.price').text());
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    $('.total-price span').text(totalPrice + ' million');


    if (totalPrice > 50) {
        $('.error').show();
    }

    else {
        $('.error').hide();
    }
};