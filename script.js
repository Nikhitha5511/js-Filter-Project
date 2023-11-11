const data = [
	{ id: 1, name: 'Alfreds Futterkiste', country: 'Germany' },
	{ id: 2, name: 'Berglunds snabbkor', country: 'Sweden' },
	{ id: 3, name: 'Island Trading', country: 'UK' },
	{ id: 4, name: 'Koniglich Essen', country: 'Germany' },
	{ id: 5, name: 'Laughing Bacchus Winecellars', country: 'Canada' },
	{ id: 6, name: 'Magazzini Alimentari Riuniti', country: 'Italy' },
	{ id: 7, name: 'North/South', country: 'UK' },
	{ id: 8, name: 'Paris spécialités', country: 'France' },
	{ id: 9, name: 'PB Knäckebröd AB', country: 'Sweden' },
	{ id: 10, name: 'Refrescos Americanas LTDA', country: 'Brazil' },
	{ id: 11, name: 'Ricardo Adocicados', country: 'Brazil' },
	{ id: 12, name: 'Simons Bistro', country: 'USA' },
	{ id: 13, name: 'The Big Cheese', country: 'USA' },
	{ id: 14, name: 'Toms Spezialitäten', country: 'Germany' },
	{ id: 15, name: 'Vins et alcools Chevalier', country: 'France' },
	{ id: 16, name: 'Zaanse Snoepfabriek', country: 'Brazil' },
]

const dataTableBody=document.getElementById("dataTable").getElementsByTagName("tbody")[0];

const resultTable=(filterData)=>{
    dataTableBody.innerHTML="";
    filterData.forEach((row)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${row.name}</td><td>${row.country}</td>`;
    dataTableBody.appendChild(tr);
    });
}

const searchInput=document.getElementById("searchInput");
searchInput.addEventListener("keyup",(event)=>{
    const searchKey=event.target.value.toLowerCase();
    const filteredData=data.filter((row)=>
     row.name.toLowerCase().includes(searchKey) || row.country.toLowerCase().includes(searchKey)
    );
    resultTable(filteredData);
})

resultTable(data);

