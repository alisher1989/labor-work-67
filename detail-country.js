const container = $('.container');
let detailLink = "https://restcountries.eu/rest/v2/alpha/";
const urlParams = new URLSearchParams(window.location.search);


function renderData(data) {
    let values = Object.values(data);
    for (countryValues of values) {
        let countryDiv = $(document.createElement('div'));
        countryDiv.addClass('element');
        countryDiv.append(countryValues);
        container.append(countryDiv);
    }
    // for (let i = 0; i < data; i++) {
    //     let countryDiv = $(document.createElement('div'));
    //     countryDiv.addClass('element');
    //     countryDiv.append(data[i].name);
    //     container.append(countryDiv);
    // }
}

function parseUrl() {
    let param = urlParams.get('code');
    return detailLink + param
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error')
}

function jqueryLoadIndex() {
    $.ajax({
        url: parseUrl(),
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError,
    });
}

$(document).ready(function () {
    data = jqueryLoadIndex();
});