// document.addEventListener('DOMContentLoaded', function () {
//     // просто пишем в консоль
//     console.log('Hello World!');
//     // далее писать будем не в консоль, а на страницу для наглядности.
//     document.getElementById('Div_Hello_World').innerHTML += '<p>hello word from JS</p>';
// })

// @ts-check

// выводим всплывающее окно
function sb_yra() {
  alert("Yes!!!");
}

// обрабатываем нажатие кнопки
function changeTextBtnClick() {
  let div = document.getElementById("Div_new_text");
  let newText = document.createElement("p"); // Создаём новый элемент p
  newText.textContent = "Новый текст вписан."; // Устанавливаем текст
  div?.appendChild(newText); // Добавляем этот новый элемент в конец div
}

document.addEventListener("DOMContentLoaded", function () {
  // создаём константу и выводим её
  const constNum = 123;
  const div = document.getElementById("Div_Const");
  if (div) {
    div.innerHTML += "<p>" + constNum + "</p>";
  } else {
    console.error("Element with id 'Div_Const' does not exist.");
  }

  // создаём константу заданного типа
  /**
   * @type {string}
   */
  const constStr =
    "Это строка. Если задать число, то IDE подсветит ошибку." +
    " Потому что в проекте включёна проверка  типов // @ts-check";
  let Div_Const = document.getElementById("Div_Const");
  if (Div_Const) {
    Div_Const.innerHTML = "<p>" + constStr + "</p>";
  } else {
    console.error("Element with id 'Div_Const' does not exist.");
  }

  // создаём строковую переменную и выводим её

  let Div_varString = document.getElementById("Div_varString");
  if (Div_varString) {
    Div_varString.innerHTML = "<h3>" + "Строковая переменная" + "</h3>";
    let varString = "abcdef"; // создаём строковую переменную
    Div_varString.innerHTML += "varString = " + varString + "<br/>" + "<hr>";
    Div_varString.innerHTML += "<h3>" + "Вырезаем строку" + "</h3>";
    let sliceStr = varString.slice(1, 3); // вырезание строки с 1-ого символа(включая) до 3-ого (исключая)
    Div_varString.innerHTML += "sliceStr = " + sliceStr + "<br/>"; // Выведет 'bc'
  } else {
    console.error("Element with id 'Div_varString' does not exist.");
  }

  // Создаём объект, меняем его свойство, выводим свойства объекта прямо на сайт!!!
  let Div_object1 = document.getElementById("Div_object1");
  if (Div_object1) {
    Div_object1.innerHTML = "<h3>" + "Объект 1" + "</h3>";
    let object1 = {
      // Создание объекта
      property1: true,
      property2: 10,
    };
    object1.property1 = false; // изменение свойства объекта
    Div_object1.innerHTML +=
      "object1.property1 = " + object1.property1 + "<br/>";
    Div_object1.innerHTML +=
      "object1.property2 = " + object1.property2 + "<br/>";
  } else {
    console.error("Element with id 'Div_object1' does not exist.");
  }

  // ВЫРАЖЕНИЯ
  let div_expression = document.getElementById("div_expression");
  if (div_expression) {
    div_expression.innerHTML += "<h3>" + "ВЫРАЖЕНИЯ" + "</h3>";
    div_expression.innerHTML +=
      "<b>" +
      "Выражение" +
      "</b>" +
      " (expression) в JavaScript - это комбинация значений," +
      " переменных, операторов и вызовов функций, которая вычисляется в значение." +
      "<br/>" +
      " Любое выражение ВСЕГДА возвращае значение";
    const string = "ABC";
    // строка это выражение если передать её интерпритатору то он её же и вернёт
    div_expression.innerHTML += "строка " + string + "<br/>";

    const num = 123;
    // число это выражение если передать его интерпритатору то он его же и вернёт
    div_expression.innerHTML += "число " + num + "<br/>";

    const sum12 = 1 + 2;
    // Это тоже выражение если передать его интерпритатору то он вернёт 3
    div_expression.innerHTML += "1 + 2 = " + sum12 + "<br/>";

    let constNum1;
    // constNum1=123 - Это тоже выражение если передать его интерпритатору то он вернёт 123
    div_expression.innerHTML +=
      "constNum1 = " + (constNum1 = 123) + ", точно " + constNum1 + "<br/>";

    // конкатенация строк это тоже выражение, возвращающее сумму строк
    div_expression.innerHTML += "str1" + " + " + "str2" + "<br/>";

    // 1===1 это оператор сравнения, возвращает true или false
    div_expression.innerHTML += "1 = 1 ? " + (1 === 1) + "<br/>";

    // 2 < 1 это оператор сравнения, возвращает true или false
    div_expression.innerHTML += "2 < 1 ? " + (2 < 1) + "<br/>";

    function myFunction() {}

    // функция это тоже выражение если в ней нет явного return то она просто вернёт undefined
    div_expression.innerHTML +=
      "Функция без return возвращает " + "<b>" + myFunction() + "</b>";
  } else {
    console.error("Element with id 'div_expression' does not exist.");
  }

  //Динамическая типизация
  let div_dynamic_typing = document.getElementById("div_dynamic_typing");
  if (div_dynamic_typing) {
    div_dynamic_typing.innerHTML += `<h3> Динамическая типизация </h3>`;
    let varible;
    varible = 123;
    div_dynamic_typing.innerHTML += `varible = ${varible} тип число <br/>`;
    varible = "abc";
    div_dynamic_typing.innerHTML += `varible = ${varible} тип строка <br/>`;
    varible = true;
    div_dynamic_typing.innerHTML += `varible = ${varible} тип логический <br/>`;
  } else {
    console.error("Element with id 'div_dynamic_typing' does not exist.");
  }

  // Для избежания динамической типизации надо использоват константы
  let div_no_dynamic_typing = document.getElementById("div_no_dynamic_typing");
  const e = 1;
  if (div_no_dynamic_typing) {
    div_no_dynamic_typing.innerHTML += `<br> e = ${e} константа <br>`;
    div_no_dynamic_typing.innerHTML += `e = 2 выдаст ошибку`;
  } else {
    console.error("Element with id 'div_no_dynamic_typing' does not exist.");
  }

  // Объект это ссылочный тип
  let div_object2 = document.getElementById("div_object2");
  const objectA = {
    property1: 10,
    property2: true,
  };
  if (div_object2) {
    div_object2.innerHTML += `<p> objectA.property1 =  ${objectA.property1} </p>`;
    let copyOfA;
    copyOfA = objectA;
    copyOfA.property1 = 20;
    div_object2.innerHTML += `<p> objectA.property1 =  ${objectA.property1} </p>`;
  } else {
    console.error("Element with id 'div_object2' does not exist.");
  }

  // Управление объектом
  let div_object3 = document.getElementById("div_object3");
  if (div_object3) {
    let copyOfA;
    copyOfA = objectA;
    div_object3.innerHTML += "Добавляем новое свойство объекту" + "<br/>";
    objectA.newproperty = 123; // добавляем новое свойство объекту
    div_object3.innerHTML += `objectA.newproperty = ${objectA.newproperty} <br/>`;
    div_object3.innerHTML += "<br/>" + "удаляем свойство объекта" + "<br/>";
    delete objectA.newproperty; // удаляем свойство объекта
    div_object3.innerHTML += JSON.stringify(objectA) + "<br/>"; // про JSON далее будет
    div_object3.innerHTML += "<br/>";
    div_object3.innerHTML +=
      "создаём свойство объекта с именем как у переменной" + "<br/>";
    const propertyName = "property3";
    objectA[propertyName] = "value3";
    div_object3.innerHTML += JSON.stringify(objectA) + "<br/>"; // про JSON далее будет
    div_object3.innerHTML +=
      "<br/>" + "добавляем свойства к копии объекта, " + "<br/>";
    div_object3.innerHTML +=
      "исходный объект тоже получает эти свойства, " + "<br/>";
    div_object3.innerHTML +=
      "объект и его копия это ссылки на одну и ту же область памяти";
    copyOfA.property4 = 123;
    div_object3.innerHTML += "<br/>" + (JSON.stringify(objectA) + "<br/>");
  } else {
    console.error("Element with id 'div_object3' does not exist.");
  }

  // Вложенный объект
  let div_object4 = document.getElementById("div_object4");
  const city = {
    cityName: 1,
    info: {
      popylar: 123,
      country: "Russian",
    },
  };
  if (div_object4) {
    div_object4.innerHTML += JSON.stringify(city) + "<br/>";
    city.info.popylar = 0;
    div_object4.innerHTML += JSON.stringify(city) + "<br/>";
  } else {
    console.error("Element with id 'div_object4' does not exist.");
  }

  // объявляем объект используя в качесве свойств объявленные ранее переменные
  const myName = "Max";
  const age = 34;
  const Me = {
    myName,
    age,
    happy: true,
  };
  const div_object5 = document.getElementById("div_object5");
  console.table(Me); // используем табличный вывод
  if (div_object5) {
    div_object5.innerHTML += `${JSON.stringify(Me)} <br/>`;
    div_object5.innerHTML += "порядок свойств в объекте не имеет значения";
  } else {
    console.error("Element with id 'div_object5' does not exist.");
  }

  // Метод
  const myHome = {
    material: "wood",
    adress: function () {
      console.log("Novosibirsk");
    },
  };
  myHome.adress();
  const div_method = document.getElementById("div_method");
  if (div_method) {
    div_method.innerHTML += "<br/>" + JSON.stringify(myHome) + "<br/>";
  } else {
    console.error("Element with id 'div_method' does not exist.");
  }

  // Json
  let person = JSON.parse('{"name": "Ivan", "age":11}');
  const div_JSON1 = document.getElementById("div_JSON1");
  if (div_JSON1) {
    div_JSON1.innerHTML += "<br/>" + JSON.stringify(person) + "<br/>";
  } else {
    console.error("Element with id 'div_JSON1' does not exist.");
  }

  // JSON.stringify
  let car = {
    color: "red",
    price: 10,
  };
  const div_JSON2 = document.getElementById("div_JSON2");
  if (div_JSON2) {
    div_JSON2.innerHTML += "<br/>" + JSON.stringify(car);
  } else {
    console.error("Element with id 'div_JSON2' does not exist.");
  }
});

let myNum = 1; // Исходное число

// Функция для безопасного обновления значения переменной
function updateValue(variable, newValue) {
  if (typeof newValue === "number") {
    variable = newValue;
  } else {
    console.error("Значение не является числом");
  }
  return variable;
}

function but_change_num() {
  myNum = updateValue(myNum, myNum + 1);
  let div_no_dynamic_typing = document.getElementById("div_no_dynamic_typing");
  if (div_no_dynamic_typing) {
    div_no_dynamic_typing.innerHTML += `<p style='color: darkgreen'> myNum = ${myNum} </p>`;
  } else {
    console.error("Element with id 'div_no_dynamic_typing' does not exist.");
  }
}

function but_change_str() {
  myNum = updateValue(myNum, "123");
  let div_no_dynamic_typing = document.getElementById("div_no_dynamic_typing");
  if (div_no_dynamic_typing) {
    div_no_dynamic_typing.innerHTML +=
      "<p style='color: darkred'> Ошибка: Значение не является числом </p> ";
  } else {
    console.error("Element with id 'div_no_dynamic_typing' does not exist.");
  }
}
