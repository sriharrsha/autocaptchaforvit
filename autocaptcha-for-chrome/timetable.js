document.getElementsByName('regular')[0].innerHTML = "<a href=\"#\" onclick=\"$('#table1').tableExport({type:'png',escape:'false'});\"> PNG</a>" + document.getElementsByName('regular')[0].innerHTML;

document.getElementsByName('regular')[0].innerHTML += "<hr></br><h2>how r u?<h2>";

var table = document.getElementsByTagName('table')[0];
var table1 = table.getElementsByTagName('table')[0];
var table2 = table.getElementsByTagName('table')[1];

table1.setAttribute("id", "table1");

 table2.setAttribute("id", "table2");
