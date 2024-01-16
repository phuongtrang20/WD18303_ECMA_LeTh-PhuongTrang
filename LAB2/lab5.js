function generateTableHeader(headerTitles){
    //Viết phần kiểm tra
    let html = ``;

    headerTitles.forEach(element => {
        // console.log(element);
        html +=  `<th>${element}</th>`;
    });
    return ` <thead><tr>${html}</tr></thead>`;
}




function generateTableRowStudent(object){
    return `<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td><img src="${object.avata}"></td>
        <td>${object.createAt}</td>
    </tr>`;

}

// let obj = {
//     id: 1,
//     name: 'Kha',
//     avata: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
//     createAt: "2024/03/01"
// };
// document.write(generateTableRowStudent(obj));

function generateTable(headers, data){
    let headerRow = generateTableHeader(headers);
    
    let html = '';
    data.forEach(element => {
        html += generateTableRowStudent(element)
    })
    return `<table>${headerRow}<tbody>${html}</table></tbody>`
}
let list = [
    {
        id: 1,
        name: 'Kha',
        avata: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/03/01"
    },
    {
        id: 2,
        name: 'Kha nè',
        avata: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/03/01"
    },
]
// document.write(generateTableRowStudent(obj));     
let header = [
    "id",
    "name",
    "avata",
    "date"
]
document.write(generateTable(header, list))
