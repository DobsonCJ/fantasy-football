// JSON Data
var playersJson = [], teamsJson = [];
function getJsonData(url) {
    var jsonData = [];
    $.getJSON(url, function (data) {
        $.each(data, function (i) {
            jsonData.push(data[i]);
        });
        // Store players and teams in semantically named variables
        playersJson = jsonData[1],
            teamsJson = jsonData[4];
        // Once json data has been loaded and stored in correct arrays start populating players
        PopulatePlayerList();
    });
}
function PopulatePlayerList() {
    var GoalkeepersRightColumn = $('.goalkeepers-table-right'), GoalkeepersLeftColumn = $('.goalkeepers-table-left'), DefendersRightColumn = $('.defenders-table-right'), DefendersLeftColumn = $('.defenders-table-left'), MidfieldersRightColumn = $('.midfielders-table-right'), MidfieldersLeftColumn = $('.midfielders-table-left'), ForwardsRightColumn = $('.forwards-table-right'), ForwardsLeftColumn = $('.forwards-table-left'), 
    // Create empty arrays so that players can be filtered into correct positions
    _goalkeepersArray = [], _defendersArray = [], _midfieldersArray = [], _forwardsArray = [], 
    // Create variables to store player rows
    _goalkeepers, _defenders, _midfielders, _forwards, _playersPositionID;
    // Loop through each player in the players array
    for (var i = 0; i < playersJson.length; i++) {
        // Create a variable for the Players Team ID and players position element type
        _playersPositionID = playersJson[i].element_type;
        if (_playersPositionID == 1) {
            _goalkeepersArray.push(playersJson[i]);
        }
        else if (_playersPositionID == 2) {
            _defendersArray.push(playersJson[i]);
        }
        else if (_playersPositionID == 3) {
            _midfieldersArray.push(playersJson[i]);
        }
        else if (_playersPositionID == 4) {
            _forwardsArray.push(playersJson[i]);
        }
    }
    // Loop through goalkeepers array and create player rows and append to add to goalkeeper variable
    for (var i = 0; i < Math.floor(_goalkeepersArray.length / 2); i++) {
        var isUnavailable = "", alertIcon = "";
        if (_goalkeepersArray[i].status == "u") {
            playerStatus = _goalkeepersArray[i].news,
                isUnavailable = " class='unavailable' data-status='" + playerStatus + "'",
                alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        else if (_goalkeepersArray[i].status == "i") {
            playerStatus = _goalkeepersArray[i].news,
                isUnavailable = " class='injured' data-status='" + playerStatus + "'",
                alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_goalkeepersArray[i].cost_change_start >= 0) {
            _goalkeepers += '<tr' + isUnavailable + '><td>' + _goalkeepersArray[i].id + '</td><td class="player-team">' + _goalkeepersArray[i].team + '</td><td>' + _goalkeepersArray[i].web_name + '</td><td>' + ((_goalkeepersArray[i].now_cost / 10) - (Math.abs(_goalkeepersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _goalkeepers += '<tr' + isUnavailable + '><td>' + _goalkeepersArray[i].id + '</td><td class="player-team">' + _goalkeepersArray[i].team + '</td><td>' + _goalkeepersArray[i].web_name + '</td><td>' + ((_goalkeepersArray[i].now_cost / 10) + (Math.abs(_goalkeepersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(GoalkeepersLeftColumn).append(_goalkeepers);
    _goalkeepers = [];
    for (var i = Math.floor(_goalkeepersArray.length / 2); i < _goalkeepersArray.length; i++) {
        var playerStatus = null, isUnavailable = "", alertIcon = "";
        if (_goalkeepersArray[i].status == "u") {
            playerStatus = _goalkeepersArray[i].news,
                isUnavailable = " class='unavailable' data-status='" + playerStatus + "'",
                alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        else if (_goalkeepersArray[i].status == "i") {
            playerStatus = _goalkeepersArray[i].news,
                isUnavailable = " class='injured' data-status='" + playerStatus + "'",
                alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_goalkeepersArray[i].cost_change_start >= 0) {
            _goalkeepers += '<tr' + isUnavailable + '><td>' + _goalkeepersArray[i].id + '</td><td class="player-team">' + _goalkeepersArray[i].team + '</td><td>' + _goalkeepersArray[i].web_name + '</td><td>' + ((_goalkeepersArray[i].now_cost / 10) - (Math.abs(_goalkeepersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _goalkeepers += '<tr' + isUnavailable + '><td>' + _goalkeepersArray[i].id + '</td><td class="player-team">' + _goalkeepersArray[i].team + '</td><td>' + _goalkeepersArray[i].web_name + '</td><td>' + ((_goalkeepersArray[i].now_cost / 10) + (Math.abs(_goalkeepersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(GoalkeepersRightColumn).append(_goalkeepers);
    // Loop through defenders array and create player rows and append to add to defender variable
    for (var i = 0; i < Math.floor(_defendersArray.length / 2); i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_defendersArray[i].status == "u") {
            var playerStatus = _defendersArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_defendersArray[i].cost_change_start >= 0) {
            _defenders += '<tr' + isUnavailable + '><td>' + _defendersArray[i].id + '</td><td class="player-team">' + _defendersArray[i].team + '</td><td>' + _defendersArray[i].web_name + '</td><td>' + ((_defendersArray[i].now_cost / 10) - (Math.abs(_defendersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _defenders += '<tr' + isUnavailable + '><td>' + _defendersArray[i].id + '</td><td class="player-team">' + _defendersArray[i].team + '</td><td>' + _defendersArray[i].web_name + '</td><td>' + ((_defendersArray[i].now_cost / 10) + (Math.abs(_defendersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(DefendersLeftColumn).append(_defenders);
    _defenders = [];
    for (var i = Math.floor(_defendersArray.length / 2); i < _defendersArray.length; i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_defendersArray[i].status == "u") {
            var playerStatus = _defendersArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_defendersArray[i].cost_change_start >= 0) {
            _defenders += '<tr' + isUnavailable + '><td>' + _defendersArray[i].id + '</td><td class="player-team">' + _defendersArray[i].team + '</td><td>' + _defendersArray[i].web_name + '</td><td>' + ((_defendersArray[i].now_cost / 10) - (Math.abs(_defendersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _defenders += '<tr' + isUnavailable + '><td>' + _defendersArray[i].id + '</td><td class="player-team">' + _defendersArray[i].team + '</td><td>' + _defendersArray[i].web_name + '</td><td>' + ((_defendersArray[i].now_cost / 10) + (Math.abs(_defendersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(DefendersRightColumn).append(_defenders);
    // Loop through midfielders array and create player rows and append to add to midfielder variable
    for (var i = 0; i < Math.floor(_midfieldersArray.length / 2); i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_midfieldersArray[i].status == "u") {
            var playerStatus = _midfieldersArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_midfieldersArray[i].cost_change_start >= 0) {
            _midfielders += '<tr' + isUnavailable + '><td>' + _midfieldersArray[i].id + '</td><td class="player-team">' + _midfieldersArray[i].team + '</td><td>' + _midfieldersArray[i].web_name + '</td><td>' + ((_midfieldersArray[i].now_cost / 10) - (Math.abs(_midfieldersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _midfielders += '<tr' + isUnavailable + '><td>' + _midfieldersArray[i].id + '</td><td class="player-team">' + _midfieldersArray[i].team + '</td><td>' + _midfieldersArray[i].web_name + '</td><td>' + ((_midfieldersArray[i].now_cost / 10) + (Math.abs(_midfieldersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(MidfieldersLeftColumn).append(_midfielders);
    _midfielders = [];
    for (var i = Math.floor(_midfieldersArray.length / 2); i < _midfieldersArray.length; i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_midfieldersArray[i].status == "u") {
            var playerStatus = _midfieldersArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_midfieldersArray[i].cost_change_start >= 0) {
            _midfielders += '<tr' + isUnavailable + '><td>' + _midfieldersArray[i].id + '</td><td class="player-team">' + _midfieldersArray[i].team + '</td><td>' + _midfieldersArray[i].web_name + '</td><td>' + ((_midfieldersArray[i].now_cost / 10) - (Math.abs(_midfieldersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _midfielders += '<tr' + isUnavailable + '><td>' + _midfieldersArray[i].id + '</td><td class="player-team">' + _midfieldersArray[i].team + '</td><td>' + _midfieldersArray[i].web_name + '</td><td>' + ((_midfieldersArray[i].now_cost / 10) + (Math.abs(_midfieldersArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(MidfieldersRightColumn).append(_midfielders);
    // Loop through Forwards array and create player rows and append to add to forwards variable
    for (var i = 0; i < Math.floor(_forwardsArray.length / 2); i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_forwardsArray[i].status == "u") {
            var playerStatus = _forwardsArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_forwardsArray[i].cost_change_start >= 0) {
            _forwards += '<tr' + isUnavailable + '><td>' + _forwardsArray[i].id + '</td><td class="player-team">' + _forwardsArray[i].team + '</td><td>' + _forwardsArray[i].web_name + '</td><td>' + ((_forwardsArray[i].now_cost / 10) - (Math.abs(_forwardsArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _forwards += '<tr' + isUnavailable + '><td>' + _forwardsArray[i].id + '</td><td class="player-team">' + _forwardsArray[i].team + '</td><td>' + _forwardsArray[i].web_name + '</td><td>' + ((_forwardsArray[i].now_cost / 10) + (Math.abs(_forwardsArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(ForwardsLeftColumn).append(_forwards);
    _forwards = [];
    for (var i = Math.floor(_forwardsArray.length / 2); i < _forwardsArray.length; i++) {
        var isUnavailable = "";
        alertIcon = "";
        if (_forwardsArray[i].status == "u") {
            var playerStatus = _forwardsArray[i].news, isUnavailable = " class='unavailable' data-status='" + playerStatus + "'", alertIcon = "<i class='fas fa-exclamation-triangle'></i><span class='player-status'>" + playerStatus + "</span>";
        }
        if (_forwardsArray[i].cost_change_start >= 0) {
            _forwards += '<tr' + isUnavailable + '><td>' + _forwardsArray[i].id + '</td><td class="player-team">' + _forwardsArray[i].team + '</td><td>' + _forwardsArray[i].web_name + '</td><td>' + ((_forwardsArray[i].now_cost / 10) - (Math.abs(_forwardsArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
        else {
            _forwards += '<tr' + isUnavailable + '><td>' + _forwardsArray[i].id + '</td><td class="player-team">' + _forwardsArray[i].team + '</td><td>' + _forwardsArray[i].web_name + '</td><td>' + ((_forwardsArray[i].now_cost / 10) + (Math.abs(_forwardsArray[i].cost_change_start) / 10)).toFixed(1) + alertIcon + '</td></tr>';
        }
    }
    $(ForwardsRightColumn).append(_forwards);
    // Loop through each player team ID and replace it with the team name abbreviation
    $(".player-team").each(function () {
        var teamID = $(this).text();
        switch (true) {
            case (teamID == "1"):
                $(this).text("ARS");
                break;
            case (teamID == "2"):
                $(this).text("BOU");
                break;
            case (teamID == "3"):
                $(this).text("BHA");
                break;
            case (teamID == "4"):
                $(this).text("BUR");
                break;
            case (teamID == "5"):
                $(this).text("CHE");
                break;
            case (teamID == "6"):
                $(this).text("CRY");
                break;
            case (teamID == "7"):
                $(this).text("EVE");
                break;
            case (teamID == "8"):
                $(this).text("HUD");
                break;
            case (teamID == "9"):
                $(this).text("LEI");
                break;
            case (teamID == "10"):
                $(this).text("LIV");
                break;
            case (teamID == "11"):
                $(this).text("MNC");
                break;
            case (teamID == "12"):
                $(this).text("MNU");
                break;
            case (teamID == "13"):
                $(this).text("NEW");
                break;
            case (teamID == "14"):
                $(this).text("SOU");
                break;
            case (teamID == "15"):
                $(this).text("STO");
                break;
            case (teamID == "16"):
                $(this).text("SWA");
                break;
            case (teamID == "17"):
                $(this).text("TOT");
                break;
            case (teamID == "18"):
                $(this).text("WAT");
                break;
            case (teamID == "19"):
                $(this).text("WBA");
                break;
            case (teamID == "20"):
                $(this).text("WHU");
                break;
            default:
        }
    });
}
$(function () {
    var url = "https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json";
    getJsonData(url);
    $('.player-tables').on('mouseenter', '.unavailable, .injured', function () {
        $(this).addClass('show-data');
    });
    $('.player-tables').on('mouseleave', '.unavailable, .injured', function () {
        $(this).removeClass('show-data');
    });
});
//# sourceMappingURL=playerlist.js.map