const indexLink = "?fields=name;capital;alpha3Code;region;area;subregion;population;";
const container = $('.container');
let detailLink = "https://restcountries.eu/rest/v2/alpha/";
const urlParams = new URLSearchParams(window.location.search);


function renderData(data) {
    Object.entries(data).forEach(function ([key,value]) {
        console.log(`${key}: ${value}`);
        let countryDiv = $(document.createElement('div'));
        let countryB = $(document.createElement('b'));
        countryB.append(key);
        countryDiv.append(countryB);
        countryDiv.append(" : ");
        countryDiv.append(value);
        container.append(countryDiv)

    });
}

function parseUrl() {
    let param = urlParams.get('code');
    return detailLink + param + indexLink
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