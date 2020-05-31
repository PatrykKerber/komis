const nowe = [
  {
    "Marka i model": "BMW x5",
    "Typ pojazdu": "SUV",
    "Rok produkcji": 2016,
    "Kraj pochodzenia": "Niemcy",
    "Rodzaj Paliwa": "Elektryczny",
    "Kolor lakieru": "Czarny",
    "Cena [zł]": 453423,
  },
  {
    "Marka i model": "Daewoo espero",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2020,
    "Kraj pochodzenia": "Wielka Brytania",
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Czerwony",
    "Cena [zł]": 458485,
  },
  {
    "Marka i model": "Mazda 6",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2021,
    "Kraj pochodzenia": "Niemcy",
    "Rodzaj Paliwa": "LPG",
    "Kolor lakieru": "Czarny",
    "Cena [zł]": 678778,
  },
  {
    "Marka i model": "Audi a7",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2020,
    "Kraj pochodzenia": "Niemcy",
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Biały ",
    "Cena [zł]": 343534,
  },
  {
    "Marka i model": "Alfa romeo 147",
    "Typ pojazdu": "SUV",
    "Rok produkcji": 2017,
    "Kraj pochodzenia": "Wielka Brytania",
    "Rodzaj Paliwa": "LPG",
    "Kolor lakieru": "Czerwony",
    "Cena [zł]": 2342342,
  },
  {
    "Marka i model": "Honda civic",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2019,
    "Kraj pochodzenia": "USA",
    "Rodzaj Paliwa": "Elektryczny",
    "Kolor lakieru": "Różowy",
    "Cena [zł]": 23234,
  },
  {
    "Marka i model": "Opel astra",
    "Typ pojazdu": "Kompakt",
    "Rok produkcji": 2014,
    "Kraj pochodzenia": "Polska",
    "Rodzaj Paliwa": " Benzyna + LPG",
    "Kolor lakieru": "Niebieski",
    "Cena [zł]": 1413434,
  },
  {
    "Marka i model": "Opel corsa",
    "Typ pojazdu": "Coupe",
    "Rok produkcji": 2011,
    "Kraj pochodzenia": "Włochy",
    "Rodzaj Paliwa": "Hyybryda",
    "Kolor lakieru": "Zielony",
    "Cena [zł]": 123123,
  },
  {
    "Marka i model": "Bentley azure",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2018,
    "Kraj pochodzenia": "Francja",
    "Rodzaj Paliwa": "Diesel ",
    "Kolor lakieru": "Szary",
    "Cena [zł]": 34533,
  },
  {
    "Marka i model": "Fiat 126p",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2016,
    "Kraj pochodzenia": "USA",
    "Rodzaj Paliwa": "Elektryczny",
    "Kolor lakieru": "Biały ",
    "Cena [zł]": 252243,
  },
  {
    "Marka i model": "Mercedes B",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2019,
    "Kraj pochodzenia": "Czechy",
    "Rodzaj Paliwa": "Benzyna+LPG",
    "Kolor lakieru": "Czerwony",
    "Cena [zł]": 234234,
  },
  {
    "Marka i model": "Porsche",
    "Typ pojazdu": "SUV",
    "Rok produkcji": 2014,
    "Kraj pochodzenia": "Niemcy",
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Czarny",
    "Cena [zł]": 32556,
  },
  {
    "Marka i model": "Lamborghini",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2001,
    "Kraj pochodzenia": "Niemcy",
    "Rodzaj Paliwa": "Diesel",
    "Kolor lakieru": "Biały ",
    "Cena [zł]": 768484,
  },
  {
    "Marka i model": "Polonez",
    "Typ pojazdu": "Kompakt",
    "Rok produkcji": 2016,
    "Kraj pochodzenia": "Polska",
    "Rodzaj Paliwa": "Diesel",
    "Kolor lakieru": "Czerwony",
    "Cena [zł]": 567557,
  },
  {
    "Marka i model": "Skoda Citigo",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2017,
    "Kraj pochodzenia": "Polska",
    "Rodzaj Paliwa": "Hybryda",
    "Kolor lakieru": "Błękit",
    "Cena [zł]": 86785,
  },
];
function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === "desc") {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

function generateHeaders(data) {
  const table = document.querySelector(".dynamic-table");
  const headers = Object.keys(data[0]);
  const t = data;
  const THeader = document.createElement("tr");
  const Theaders = headers.forEach((el) => {
    const thEl = document.createElement("th");
    thEl.innerHTML = el;
    thEl.dataset.filter = el;
    thEl.dataset.order = "desc";
    thEl.classList.add("table-header");
    thEl.addEventListener("click", (e) => {
      if (thEl.dataset.order == "asc") {
        thEl.dataset.order = "desc";
      } else {
        thEl.dataset.order = "asc";
      }
      generateColumns(el, thEl.dataset.order, t);
    });
    THeader.appendChild(thEl);
  });
  table.appendChild(THeader);
}

function generateColumns(key = null, order = null, data = nowe) {
  console.log(data);
  const elements = [];
  const tbody = document.createElement("tbody");

  const table = document.querySelector(".dynamic-table");
  const oldChilds = table.childNodes;
  oldChilds.forEach((e, key) => {
    if (key > 0) e.remove();
  });
  let sortData = [];
  if (key && order) {
    sortData = data.sort(dynamicsort(key, order));
  } else {
    sortData = data;
  }

  sortData.forEach((item) => {
    const tr = document.createElement("tr");
    Object.values(item).forEach((el) => {
      const td = document.createElement("td");
      td.innerHTML = el;
      tr.appendChild(td);
    });
    const oldChilds = table.childNodes;
    elements.push(tr);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

generateHeaders(nowe);
generateColumns(nowe);
