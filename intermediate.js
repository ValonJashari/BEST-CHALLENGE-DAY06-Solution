var employeesArr = JSON.parse(employees);

for (let i = 0; i < employeesArr.length; i++) {
    //TR Element
    var newTr = document.createElement("tr");
    newTr.setAttribute("id", "tr" + [i]);
    document.getElementById("result").appendChild(newTr);

    //TD Elements
    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].UniqueId);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);

    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].firstName);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);

    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].lastName);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);

    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].emailAddress);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);

    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].jobTitleName);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);

    var newTd = document.createElement("td");
    var textTd = document.createTextNode(employeesArr[i].salary);
    newTd.appendChild(textTd);
    document.getElementById("tr" + [i]).appendChild(newTd);
}

console.log(employeesArr);