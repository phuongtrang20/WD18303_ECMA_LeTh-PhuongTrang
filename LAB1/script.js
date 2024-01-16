////LAB1-Bài 1



////LAB1-Bài 2
let name = 'Phuong Trang';
let age = '19';
let sayHello = () => {
    console.log(`I'm ${name}, ${age}`);
}

////LAB1-Bài 3
fetch("https://api.publicapis.org/entries")
    .then(function(resource){
    resource.json().then(function(data){
        // console.log(data.count)
        console.log(data.entries);
        let array = data.entries;
        let html = document.getElementById('PC05840')
        let child_html = `<ul><li><strong>COUNT: </strong>${data.count}</li>`
        // html.innerHTML = data.count;

        array.forEach(element => {
            console.log(element.Description);
            child_html += `<li> ${element.Description} </li>`
        });
        child_html += '</ul';
        html.innerHTML = child_html
    })
})

////LAB1.3
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function(resource2){
        resource2.json().then(function(entries){
            console.log(entries.data);
            let array = entries.data;
            let html = document.getElementById('Lab1.3')
            let child_html = `<table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nation</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Population</th>
                                </tr>
                                </thead>
                                <tbody>`
            array.forEach((element, index) => {
                child_html += ` <tr>
                <td>${index + 1}</td>
                <td>${element.Nation}</td>
                <td>${element.Year}</td>
                <td>${element.Population}</td>
              </tr>`;
            });
            child_html +=   `</tbody>
                            </table>`;
            html.innerHTML = child_html

        })
    });


////LAB1.4  
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(resource3){
        resource3.json().then(function(data){
            let html = document.getElementById('Lab1.4')
            let child_html = `<table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ảnh đại diện</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Ngày tạo</th>
                                </tr>
                                </thead>
                                <tbody>`;
            data.forEach(element => {
                child_html += `<tr>
                <td>${element.id}</td>
                <td><img src="${element.avatar}"</td>
                <td>${element.name}</td>
                <td>${element.createdAt}</td>
              </tr>`
            });
            child_html +=   `</tbody>
                            </table>`;
            html.innerHTML = child_html
        })
    })

