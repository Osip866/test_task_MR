// Сохраняем XMLHttpRequest и адрес JSON-файла в переменных
// var xhr = new XMLHttpRequest();
// var url = http://www.mrsoft.by/data.json;

// // Вызываем при изменении атрибута readyState
// xhr.onreadystatechange = function() {
//     // Проверяем, выполнен ли запрос на получение
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         // Разбираем строку JSON
//         var jsonData = JSON.parse(xhr.responseText);
//         console.log(jsonData)
//             // Вызываем showArtists() и передаём разобранный JSON
//             // showArtists(jsonData);
//     }
// };

// // Выполняем HTTP-вызов, используя переменную url
// xhr.open("GET", url, true);
// xhr.send();


// console.log(xhr)

// Функция, которая форматирует строку с тегами HTML, а затем выводит результат
// function showArtists(data) {
//     var output = "<ul>"; // Открываем список
//     var i;

//     // Перебираем исполнителей и добавляем их как пункты списка
//     for (var i in data.artists) {
//         output += "<li>" + data.artists[i].artistname + " (Родился: " + data.artists[i].born + ")</li>";
//     }

//     output += "</ul>"; // Закрываем список
//     // Выводим данные в элементе artistlist
//     document.getElementById("artistList").innerHTML = output;
// }








// async function getUsers(names) {
//     let jobs = [];


//     let job = fetch(`https://www.mrsoft.by/data.json`).then(
//         successResponse => {
//             if (successResponse.status != 200) {
//                 return null;
//             } else {
//                 return successResponse.json();
//             }
//         },
//         failResponse => {
//             return null;
//         }
//     );



//     jobs.push(job);

//     console.log(results);


//     let results = await Promise.all(jobs);

//     return results;


// }

// let result;

// function readTextFile(file, callback) {
//     let rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("https://www.mrsoft.by/data.json", function(text) {
//     let data = JSON.parse(text);
//     console.log(data);
//     // console.log(data.page_meta.title)
//     result = data;
// });


let url = new URL('https://www.mrsoft.by/data.json');
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onload = function() {
    alert(`Загружено: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
    alert(`Ошибка соединения`);
};

xhr.onprogress = function(event) { // запускается периодически
    // event.loaded - количество загруженных байт
    // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
    // event.total - количество байт всего (только если lengthComputable равно true)
    alert(`Загружено ${event.loaded} из ${event.total}`);
};








// let response = fetch('http://www.mrsoft.by/data.json', {
//         mode: 'no-cors' // 'cors' by default
//     })
//     .then(function(response) {
//         alert('Данные получены')
//         console.log(response)

//     });