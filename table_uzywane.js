const nowe = [
  {
    "Marka i model": "Skoda Citigo",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2000,
    "Kraj pochodzenia": "Czechy",
    Przebieg: 45457,
    "Rodzaj Paliwa": "Benzyna + LPG",
    "Kolor lakieru": "Żółty",
    Cena: 83838,
  },
  {
    "Marka i model": "BMW 520d X",
    "Typ pojazdu": "SUV",
    "Rok produkcji": 2010,
    "Kraj pochodzenia": "Niemcy",
    Przebieg: 28000,
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Czarny",
    Cena: 329344,
  },
  {
    "Marka i model": "Mercedes-Benz A 200",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2019,
    "Kraj pochodzenia": "Niemcy",
    Przebieg: 10,
    "Rodzaj Paliwa": "Diesel",
    "Kolor lakieru": "Szary",
    Cena: 678778,
  },
  {
    "Marka i model": "Audi Q8",
    "Typ pojazdu": "Kompakt",
    "Rok produkcji": 2014,
    "Kraj pochodzenia": "Polska",
    Przebieg: 1030,
    "Rodzaj Paliwa": "LPG",
    "Kolor lakieru": "Czarny",
    Cena: 968585,
  },
  {
    "Marka i model": "Chevrolet 1500",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 2001,
    "Kraj pochodzenia": "Polska",
    Przebieg: 87415,
    "Rodzaj Paliwa": "Bezyna + LPG",
    "Kolor lakieru": "Biały",
    Cena: 37237,
  },
  {
    "Marka i model": "BMW x5",
    "Typ pojazdu": "SUV",
    "Rok produkcji": 2016,
    "Kraj pochodzenia": "Niemcy",
    Przebieg: 803213,
    "Rodzaj Paliwa": "Elektryczny",
    "Kolor lakieru": "Czarny",
    Cena: 36544,
  },
  {
    "Marka i model": "Daewoo espero",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2017,
    "Kraj pochodzenia": "Wielka Brytania",
    Przebieg: 45089,
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Czerwony",
    Cena: 54744,
  },
  {
    "Marka i model": "Alfa-romeo 147",
    "Typ pojazdu": "Kompakt",
    "Rok produkcji": 2001,
    "Kraj pochodzenia": "Francja",
    Przebieg: 888,
    "Rodzaj Paliwa": "Benzyna+CNG",
    "Kolor lakieru": "Niebieski",
    Cena: 343463,
  },
  {
    "Marka i model": "Dodge dart",
    "Typ pojazdu": "Coupe",
    "Rok produkcji": 1999,
    "Kraj pochodzenia": "Włochy",
    Przebieg: 999,
    "Rodzaj Paliwa": "Benzyna+LPG",
    "Kolor lakieru": "Zielony",
    Cena: 234234,
  },
  {
    "Marka i model": "Fiat bravo",
    "Typ pojazdu": "Kombi",
    "Rok produkcji": 1989,
    "Kraj pochodzenia": "Włochy",
    Przebieg: 9999,
    "Rodzaj Paliwa": "Benzyna+LPG",
    "Kolor lakieru": "Bordowy",
    Cena: 43634,
  },
  {
    "Marka i model": "Hyundai sonata",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2010,
    "Kraj pochodzenia": "Niemcy",
    Przebieg: 94619,
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Biały",
    Cena: 43343,
  },
  {
    "Marka i model": "Cadillac cts",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2002,
    "Kraj pochodzenia": "USA",
    Przebieg: 652245,
    "Rodzaj Paliwa": "Diesel",
    "Kolor lakieru": "Żółty",
    Cena: 79676,
  },
  {
    "Marka i model": "Mazda 3",
    "Typ pojazdu": "Sedan",
    "Rok produkcji": 2015,
    "Kraj pochodzenia": "Niemcy",
    Przebieg: 25214,
    "Rodzaj Paliwa": "Diesel",
    "Kolor lakieru": "Czarny",
    Cena: 88888,
  },
  {
    "Marka i model": "Audi a2",
    "Typ pojazdu": "Coupe",
    "Rok produkcji": 2016,
    "Kraj pochodzenia": "Polska",
    Przebieg: 58475,
    "Rodzaj Paliwa": "Hybryda",
    "Kolor lakieru": "Biały",
    Cena: 55644,
  },
  {
    "Marka i model": "Bentley azure",
    "Typ pojazdu": "Kabriolet",
    "Rok produkcji": 1999,
    "Kraj pochodzenia": "USA",
    Przebieg: 5220,
    "Rodzaj Paliwa": "Benzyna",
    "Kolor lakieru": "Czarny",
    Cena: 211569,
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
