// URLs infos
var topFive = [
    {
        "id": "23094",
        "hits": 1003,
        "url": "http://globo.com",
        "shortUrl": "http://chr.dc/9dtr4"
    },
    {
        "id": "76291",
        "hits": 1922,
        "url": "http://google.com",
        "shortUrl": "http://chr.dc/aUx71"
    },
    {
        "id": "66761",
        "hits": 765,
        "url": "http://terra.com.br",
        "shortUrl": "http://chr.dc/u9jh3"
    },
    {
        "id": "70001",
        "hits": 1519,
        "url": "http://facebook.com",
        "shortUrl": "http://chr.dc/qy61p"
    },
    {
        "id": "21220",
        "hits": 311,
        "url": "http://diariocatarinense.com.br",
        "shortUrl": "http://chr.dc/87itr"
    },
    {
        "id": "10743",
        "hits": 722,
        "url": "http://uol.com.br",
        "shortUrl": "http://chr.dc/y81xc"
    },
    {
        "id": "19122",
        "hits": 1320,
        "url": "http://chaordic.com.br",
        "shortUrl": "http://chr.dc/qy5k9"
    },
    {
        "id": "55324",
        "hits": 997,
        "url": "http://youtube.com",
        "shortUrl": "http://chr.dc/1w5tg"
    },
    {
        "id": "70931",
        "hits": 487,
        "url": "http://twitter.com",
        "shortUrl": "http://chr.dc/7tmv1"
    },
    {
        "id": "87112",
        "hits": 130,
        "url": "http://bing.com",
        "shortUrl": "http://chr.dc/9opw2"
    }
];

var urlInput = document.querySelector("#urlInput"),
    resetButton = document.querySelector("#resetButton"),
    buttonText = document.querySelector("#shortenButton"),
    shortenerForm = document.querySelector("#shortenerForm");

// Event Listeners on submit/click shortener button
if (shortenerForm && resetButton) {
    shortenerForm.addEventListener("submit", onSubmitForm);
    resetButton.addEventListener("click", resetForm);
}

function onSubmitForm(e) {
    e.preventDefault();

    // Search url in array
    var result = null;
    for (var i = 0; i < topFive.length; i++) {
        if(topFive[i].url == urlInput.value) {
            result = topFive[i];
        }
    }

    // Replace long url for short url
    if (result) {
        urlInput.value = result.shortUrl;
        buttonText.value = "Copiar";
        urlInput.classList.add("short-url");
        //Copy short url
        urlInput.select();
        document.execCommand("Copy");
        //Add class .active
        resetButton.classList.add("active");
    }
}

// Remove class .active and change button text
function resetForm() {
    this.classList.remove("active");
    buttonText.value = "Encurtar";
}

//Write HTML using the sorted array
function buildHtml(topFive) {
    var rows = "";

    //Sort array by hits value
    topFive.sort(function(a,b) {
        return b.hits - a.hits;
    });

    for(var i = 0; i < 5; i++) {
        rows += buildRow(topFive[i]);
    }
    return rows;
}

function buildRow(numberHits) {
    return `<tr>
                <td>
                    <a href="${numberHits.url}" target="_blank"> ${numberHits.shortUrl} </a>
                </td>
                <td>${numberHits.hits}
                </td>
            </tr>`;
}

//Insert HTML into the table
function insertHtml() {
    var table = document.querySelector("#ranking");
    table.innerHTML = buildHtml(topFive);
}

insertHtml();