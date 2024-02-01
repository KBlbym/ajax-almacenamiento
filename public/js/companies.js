const URL_BASE = "/api/";
let companiesTable = document.querySelector("#companies");
let tbdoy = document.querySelector("#companies tbody");
const NAME = document.querySelector("#name");
const INDUSTRY = document.querySelector("#industry");
const SECTOR = document.querySelector("#sector");
const CAPITAL = document.querySelector("#capital");

function obtenerCompanies() {
    fetch(URL_BASE+"companies")
    .then(response=>response.json())
    .then(datos=>{
        console.log(datos);
        
        let companies = datos;
        tbdoy.innerHTML = "";
        companies.forEach(company => {
            let linea = document.createElement("tr");
            linea.innerHTML=`
                <td>${company.id}</td>
                <td>${company.name}</td>
                <td>${company.industry}</td>
                <td>${company.sector}</td>
                <td>${company.capital}</td>
            `;
            tbdoy.append(linea);
        });
    });
}

document.getElementsByName('form_create')[0].addEventListener('submit', addCompany);

function addCompany() {
    let company = {
      "name": NAME.value,
      "industry": INDUSTRY.value,
      "sector": SECTOR.value,
      "capital": CAPITAL.value,
    };
    console.log(company)
    fetch(URL_BASE + "companies", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      obtenerCompanies();
    });
  }
obtenerCompanies();