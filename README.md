# Kalendarz świąt nietypowych - API

API do pobierania nietypowych świąt. Święta pobierane są z
[Nonsensopedii](https://nonsa.pl/wiki/Kalendarz_%C5%9Bwi%C4%85t_nietypowych) i
parsowane przez
[kalendarz-swiat-nietypowych-parser](https://github.com/dzek69/kalendarz-swiat-nietypowych-parser).

## Sposób użycia

``` sh
curl "https://pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych/{miesiąc}/{dzień}.json"

# Przykład dla 1. marca
curl "https://pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych/3/1.json"
```

## Response

``` json
[
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Międzynarodowy Dzień Walki przeciwko Zbrojeniom Atomowym"
    },
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Światowy Dzień Obrony Cywilnej"
    },
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Światowy Dzień Świadomości Autoagresji"
    },
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Dzień Puszystych"
    },
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Dzień Piegów"
    },
    {
        "month": 3,
        "day": 1,
        "year": 2020,
        "name": "Dzień Żołnierzy Wyklętych"
    }
]
```

