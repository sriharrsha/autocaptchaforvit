function readUrl(){
	var url = window.location.href;
	return url;
}

function vit()
{
	var site = readUrl();
	if(site == "https://academicscc.vit.ac.in/" || site == "http://academicscc.vit.ac.in/"){
	var select = document.getElementsByTagName('table')[1];
	select = select.getElementsByTagName('td')[0];

	var sidebar = "<div id='menu123'><center><div id='menuhead' >FCFS</div><a href='./faculty/'><div class='menuitem' >Faculty</div></a><a href='./student/'><div class='menuitem' >Student</div></a><a href='./parent/'><div class='menuitem' >Parent</div></a></center></div>";
	select.innerHTML = sidebar;
	}
	else if(site == "https://academics.vit.ac.in/" || site == "http://academics.vit.ac.in/"){
	var select = document.getElementsByTagName('table')[1];
	select = select.getElementsByTagName('td')[0];

	var sidebar = "<div id='menu123'><center><a href='./faculty/'><div class='menuitem' >Faculty</div></a><a href='./student/'><div class='menuitem' >Student</div></a><a href='./parent/'><div class='menuitem' >Parent</div></a></center></div>";
	select.innerHTML = sidebar;
	}
	else if(site == "https://academicscc.vit.ac.in/student/home.asp" || site == "http://academicscc.vit.ac.in/student/stud_home.asp"){
	//	var iframe = document.getElementsByTagName('iframe')[0].contentWindow.document.body;
	//	alert(iframe.innerHTML);
	}
}




function main(){
	var site = readUrl();
	if(site.includes("https://academics.vit.ac.in/") || site.includes("https://academicscc.vit.ac.in/")){
		vit();
	}
}


main();
