var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;

        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var row = document.createElement('tr');
        var row1 = document.createElement('tr');
        var row2 = document.createElement('tr');


        var capitalHead = document.createElement('th');
        capitalHead.innerText = 'Capital city is: ';
        var capitalCity = document.createElement('td');
        capitalCity.innerText = item.capital;

        row.append(capitalHead, capitalCity);

        var money = document.createElement('th');
        money.innerText = 'Currency: ';
        var currency = document.createElement('td');
        currency.innerText = item.currencies;

        row1.append(money, currency);

        var tongue = document.createElement('th');
        tongue.innerText = 'Language: ';
        var language = document.createElement('td');
        language.innerText = item.languages;

        row2.append(tongue, language);

        var img = document.createElement('img');
        img.src = item.flag;
        var flag = document.getElementById('flag');
        flag.append(img);


        tbody.append(row, row1, row2);
        table.append(tbody);
        liEl.append(table);

        countriesList.appendChild(liEl);
    });
}