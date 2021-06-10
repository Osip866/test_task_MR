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


// let url = new URL('https://www.mrsoft.by/data.json');
// let xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.send();

// xhr.onload = function() {
//     alert(`Загружено: ${xhr.status} ${xhr.response}`);
// };

// xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
//     alert(`Ошибка соединения`);
// };

// xhr.onprogress = function(event) { // запускается периодически
//     // event.loaded - количество загруженных байт
//     // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
//     // event.total - количество байт всего (только если lengthComputable равно true)
//     alert(`Загружено ${event.loaded} из ${event.total}`);
// };










// // // In this example, if you make an ajax request to the following website
// var myUrl = 'http://www.mrsoft.by/data.json';
// // //  But if you make it from a browser, then it will work without problem ...
// // // However to make it work, we are going to use the cors-anywhere free service to bypass this
// var proxy = 'https://cors-anywhere.herokuapp.com/';
// // // Execute request
// // var oReq = new XMLHttpRequest();
// // // oReq.addEventListener("load", function() {
// // //     console.log(this.responseText);
// // // });
// // // Or post, etc
// // oReq.open("GET", proxy + myUrl);
// // oReq.send();

// // oReq.onload = function() {
// //     alert(`Загружено: ${oReq.status} ${oReq.response}`);
// // };



// let response = fetch(proxy + myUrl, {
//     mode: 'no-cors' // 'cors' by default
// })
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//     // получаем тело ответа (см. про этот метод ниже)
//     alert("УРа работает");
//     let json = response.json();
// } else {
//     alert("Ошибка HTTP: " + response.status);
// 


const URL = 'http://www.mrsoft.by/data.json';
const j = x => x.json();
(async() => {
    const { users } = fetch(URL).then(j);
    alert(users);
})();