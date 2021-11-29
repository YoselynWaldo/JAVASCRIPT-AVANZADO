let data_global = [];


function getDatos(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {

            if (xhr.status == "200") {
                resolve(JSON.parse(xhr.response))
            }
            else {
                reject();
            }
            //console.log(xhr.response);
            // setData(data);
        };
        xhr.send();
    });
}

function setData(datos, tipo) {
    alert(tipo);
    console.log(datos);
    jsonTable(datos);
}

let objeto = {
    nombre: "Juan Perez",
    edad: 34,
    telefono: "2222-2222"
}
let objetoJson = JSON.stringify(objeto);

function jsonTable(personas) {

    for (let index = 0; index < personas.length; index++) {
        const element = personas[index];
        let html = "";
        html += "<tr id='registro_" + (index + 1) + "'>";
        html += "   <th scope='row'>" + element.id + "</th>";
        html += "   <td><img src='" + element.id
    }
}


