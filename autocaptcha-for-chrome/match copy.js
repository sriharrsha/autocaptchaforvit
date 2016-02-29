
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
}

function main(){
	var site = readUrl();
	if(site.includes("www.amazon.in/")){
		amzn();
	}
	if(site.includes("www.flipkart.com/")){
		flkt();
	}
}

main();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74236213-1', 'auto');
  ga('send', 'pageview');

