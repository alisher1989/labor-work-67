const indexLink = "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;";

function renderData(data) {
    const container = $('.container');
    for(let i = 0; i < data.length; i++) {
        let countryDiv = $(document.createElement('div'));
        countryDiv.addClass('country');
        countryDiv.append(data[i].name + "  |  ");
        let countryLink = $(document.createElement('a'));
        countryLink.attr('href', "country.html?code=" + data[i].alpha3Code.toLowerCase());
        countryLink.text('Read more');
        countryDiv.append(countryLink);
        container.append(countryDiv);
    }
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
        url: indexLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function () {
    data = jqueryLoadIndex();
});