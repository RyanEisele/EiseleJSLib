//$(document).ready(function() {
    
    function appendSelectTwo(callback){
        const selectTwoCDN = `<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>`  
        let $script = $(selectTwoCDN).on('load', callback)
        $('head').append($script)

    }
   
    
    function createRoDropdown(){

    const $select = $('<select>', {
        id: 'stationDropDown',
        style: 'width: 300px'
    }).append($('<option>', {
        value: '',
        text: 'Select Division',
        disabled: true,
        selected: true
    }));

    // Define the dropdown options
    const options = [
        "101 - VACO", "301 - Boston", "304 - Providence", "306 - New York",
        "307 - Buffalo", "308 - Hartford", "309 - Newark", "310 - Philadelphia",
        "311 - Pittsburgh", "313 - Baltimore", "314 - Roanoke", "315 - Huntington",
        "316 - Atlanta", "317 - St. Petersburg", "318 - Winston-Salem", "319 - Columbia",
        "320 - Nashville", "321 - New Orleans", "322 - Montgomery", "323 - Jackson",
        "325 - Cleveland", "326 - Indianapolis", "327 - Louisville", "328 - Chicago",
        "329 - Detroit", "330 - Milwaukee", "331 - St. Louis", "333 - Des Moines",
        "334 - Lincoln", "335 - St. Paul", "339 - Denver", "340 - Albuquerque",
        "341 - Salt Lake City", "343 - Oakland", "344 - Los Angeles", "345 - Phoenix",
        "346 - Seattle", "347 - Boise", "348 - Portland", "349 - Waco",
        "350 - Little Rock", "351 - Muskogee", "354 - Reno", "355 - San Juan",
        "358 - Manila, Philippines", "362 - Houston", "372 - Washington", "373 - Manchester",
        "376 - Records Management Center (RMC)", "377 - San Diego", "402 - Togus", "405 - White River Junction",
        "436 - Fort Harrison", "437 - Fargo", "438 - Sioux Falls", "442 - Cheyenne",
        "452 - Wichita", "459 - Honolulu", "460 - Wilmington", "463 - Anchorage"      
    ];

    // Populate the select with options
    $.each(options, function(index, value) {
        $select.append($('<option>', {
            value: value,
            text: value
        }));
    });

    // Append the select element to the dropdown container
    $('.dropdownAllRo').append($select);
    setTimeout(function(){
    $select.select2({
        //data: stationDropDown,
        placeholder: 'Select Station',
        allowClear: true,
        theme: "classic"
      
     });
},50);
}
appendSelectTwo(function(){
createRoDropdown()
});


function buildFormDropdown(){
    const formAllRoDropDown = [
        "101 - VACO", "301 - Boston", "304 - Providence", "306 - New York",
        "307 - Buffalo", "308 - Hartford", "309 - Newark", "310 - Philadelphia",
        "311 - Pittsburgh", "313 - Baltimore", "314 - Roanoke", "315 - Huntington",
        "316 - Atlanta", "317 - St. Petersburg", "318 - Winston-Salem", "319 - Columbia",
        "320 - Nashville", "321 - New Orleans", "322 - Montgomery", "323 - Jackson",
        "325 - Cleveland", "326 - Indianapolis", "327 - Louisville", "328 - Chicago",
        "329 - Detroit", "330 - Milwaukee", "331 - St. Louis", "333 - Des Moines",
        "334 - Lincoln", "335 - St. Paul", "339 - Denver", "340 - Albuquerque",
        "341 - Salt Lake City", "343 - Oakland", "344 - Los Angeles", "345 - Phoenix",
        "346 - Seattle", "347 - Boise", "348 - Portland", "349 - Waco",
        "350 - Little Rock", "351 - Muskogee", "354 - Reno", "355 - San Juan",
        "358 - Manila, Philippines", "362 - Houston", "372 - Washington", "373 - Manchester",
        "376 - Records Management Center (RMC)", "377 - San Diego", "402 - Togus", "405 - White River Junction",
        "436 - Fort Harrison", "437 - Fargo", "438 - Sioux Falls", "442 - Cheyenne",
        "452 - Wichita", "459 - Honolulu", "460 - Wilmington", "463 - Anchorage"      
    ];
    const selectRO = `<option value="Select Regional Office" disabled selected hidden>Select Regional Office</option>`
    $(".formRoDropdown").append(selectRO)
    $.each(formAllRoDropDown, function(index, value){
      $('.formRoDropdown').append($('<option>', {
        value: value,
        text: value,
    }));
    });
   //$('select option[value="Select Regional Office"]').attr('disabled','disabled');

}
//buildFormDropdown()


function getQuarter() {
    const date = new Date()
    const month = date.getMonth();
     const day = date.getDate();
     let currentQ = "did not change"
     if ((month === 9 && day >= 1) || (month >= 10 && month <= 11)) {
         currentQ = 1;
         return 1; // October 1st to December 31st
     } else if ((month === 0 && day >= 1) || (month >= 1 && month <= 2)) {
        currentQ = 2; 
        return 2; // January 1st to March 31st
     } else if ((month === 3 && day >= 1) || (month >= 4 && month <= 5)) {
        currentQ = 3; 
        return 3; // April 1st to June 30th
     } else if ((month === 6 && day >= 1) || (month >= 7 && month <= 8) || (month === 9 && day <= 30)) {
        currentQ = 4; 
        return 4 ;// July 1st to September 30th
     } else {
        currentQ = null; // Should not reach here
     }
     $(".curQ").html(currentQ)
 }




//});