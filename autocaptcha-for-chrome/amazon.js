
function readUrl(){
	var url = window.location.href;
	return url;
}

function Redirect() {
    window.location="http://developerowl.com";
}

function homePage() {
	var site = readUrl();
	//alert(site);
}

function register(){
	var site = readUrl();
	if(site.includes("www.amazon.in/ap/register"))
	{
		window.location="https://amazon.in/gp/join-and-earn?encoding=UTF8&ref=mrp_refl_cp_clbd_ind_snp_lnd&refcust=MFJG7TYMMUVOTBYXHHU24U4O64";
	}

}


homePage();
register();
