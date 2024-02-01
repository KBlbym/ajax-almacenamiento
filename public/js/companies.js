const URL_BASE = "/api/";
let companiesTable = document.querySelector("#companies");
let tbdoy = document.querySelector("#companies tbody");

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
obtenerCompanies();