function readUrl(){
	var url = window.location.href;
	return url;
}


function amzn(){
	var site = readUrl();
	if(!site.includes("tag=kluians-21"))
	{
		if(site == "http://www.amazon.in/" || site == "http://www.amazon.in/ref=nav_logo")
		{
			window.location = "http://www.amazon.in/ref=as_li_ss_tl?_encoding=UTF8&camp=3626&creative=24822&linkCode=ur2&tag=kluians-21";
		}
		else if(site == "https://www.amazon.in/" || site == "https://www.amazon.in/ref=nav_logo")
		{
			window.location = "https://www.amazon.in/ref=as_li_ss_tl?_encoding=UTF8&camp=3626&creative=24822&linkCode=ur2&tag=kluians-21";
		}
		else if(site.includes("http://www.amazon.in/gp/goldbox"))
		{
			window.location = "http://www.amazon.in/gp/goldbox/ref=as_li_ss_tl?ie=UTF8&camp=3626&creative=24822&linkCode=ur2&tag=kluians-21";
		}
		else if(site.includes("www.amazon.in/ap/register"))
		{
			window.location="https://amazon.in/gp/join-and-earn?encoding=UTF8&ref=mrp_refl_cp_clbd_ind_snp_lnd&refcust=MFJG7TYMMUVOTBYXHHU24U4O64";
		}
		else if(site.includes("https://www.amazon.in/gp/product/") && site.includes("/ref"))
		{
			
			var start = site.lastIndexOf("product/")+8;
			var last = site.lastIndexOf("/ref");
			var pid = site.substr(start,last-start);
			var urlPre = "https://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
		else if(site.includes("www.amazon.in/gp/product/") && site.includes("/ref"))
		{
			
			var start = site.lastIndexOf("product/")+8;
			var last = site.lastIndexOf("/ref");
			var pid = site.substr(start,last-start);
			var urlPre = "http://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
		else if(site.includes("/dp/") && site.includes("/ref"))
		{
			
			var start = site.lastIndexOf("/dp/")+4;
			var last = site.lastIndexOf("/ref");
			var pid = site.substr(start,last-start);
			var urlPre = "http://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
		else if(site.includes("www.amazon.in/gp/product/") && site.includes("?ref"))
		{
			
			var start = site.lastIndexOf("product/")+8;
			var last = site.lastIndexOf("?ref");
			var pid = site.substr(start,last-start);
			var urlPre = "http://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
		else if(site.includes("www.amazon.in/gp/product/") && site.includes("?red"))
		{
			
			var start = site.lastIndexOf("product/")+8;
			var last = site.lastIndexOf("?re");
			var pid = site.substr(start,last-start);
			var urlPre = "http://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
		else if(site.includes("www.amazon.in/dp/"))
		{
			
			var start = site.lastIndexOf("dp/")+3;
			var last = site.lastIndexOf("/ref");
			var pid = site.substr(start,last-start);
			var urlPre = "http://www.amazon.in/gp/product/";
			var urlMid = "/ref=as_li_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=";
			var urlPost = "&linkCode=as2&tag=kluians-21";
			var mainUrl = urlPre.concat(pid,urlMid,pid,urlPost);
			window.location = mainUrl;		
			
		}
	}
}




function flkt(){
	var site = readUrl();
	//flipkart script goes here
	if(!site.includes("affid=nathgopin") && !site.includes("viewcart") && !site.includes("checkout"))
	{
		if(site == "http://www.flipkart.com/")
			{
				window.location = "http://dl.flipkart.com/dl/?affid=nathgopin";
			}
		else if(site.includes("www.flipkart.com"))
			{
				var site = site.replace("www.flipkart.com", "dl.flipkart.com/dl");
				var site = site.concat("&affid=nathgopin");
				window.location = site;
			}
	}
}






function main(){
	var site = readUrl();
	if(site.includes("www.amazon.in/")){
		amzn();
	}
	else if(site.includes("www.flipkart.com/")){
		flkt();
	}
}

main();

  
  


