$("head").prepend("<style type=\"text/css\">" + 
                                
						"\t .newmenu {\n" + 
						"\t display:inline-block;padding-top:35px;padding-left:25px;padding-right:25px;height:90px; 		\n" + 
					"}\n" + 
						"\t .myfooter {\n" + 
						"\t background-color:#303030;height:60px;width:100%;margin-top:70px;position:absolute;left:0;bottom:0;padding:25px;color:#ccc;font-size:12px; 		\n" + 
					"}\n" + 
						"\t .newheader {\n" + 
						"\t background-color:#155f78;height:90px;width:100%;position:static;top:0;left:0;padding:0;-webkit-box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.95);-moz-box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.95); box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.95);color:white;font-size:14px;font-weight:bold; 				\n" + 
					"}\n" + 
						"\t .newheader a:hover {\n" + 
						"\t background-color:#377f9a; 				\n" + 
						
						
						"\t input::-webkit-input-placeholder { "+
								"  color:    #333;"+
								"  }"+
								"  input:-moz-placeholder { "+
								   "  color:    #333;"+
								   "  opacity:  1;"+
								"  }"+
								"  input::-moz-placeholder { "+
								"     color:    #333;"+
								   "  opacity:  1;"+
								"  }"+
								"  input:-ms-input-placeholder {"+
								"     color:    #333;"+
								"  }"+
					"}\n" + 
				"</style>");
				

$(".box").css("background-color", "#ffffff !important");
$("body, div, span, html").css("font-family", "Open Sans");


$("body").css("background-color", "#ddd !important");
$("body").css("background-image", "none");

$("#main").css("background-image", "none");
$("#main").css("background-image", "none");
$("#main").css("background-image", "none");

$(".box").css("border-radius", "0");

var myname = "User session started";
var scaninfo = "Scans left: <i>[not set]</i>";

if($(".avatar").length>0)
{
	var fetchdata = $(".avatar").next().html().split("(");
	myname = fetchdata[0];
	scaninfo = "</b>(<b>"+fetchdata[1];
	console.log(fetchdata[1]);
	if(typeof fetchdata[1] == "undefined")
	{
		scaninfo = "Scan limit not set";
	}
}

$("body").prepend("<div class='newheader' > \n"+
"<img src='http://www.app-ray.com/appray_mono.png' style='height:50px;margin:20px;'> \n"+

"<a  class='newmenu' href='index.xhtml'><div >	\n"+
	''+"Analyze an app </div> </a>	\n"+
	
"<a  class='newmenu' href='./cache.xhtml'><div >	\n"+
	''+" Reports  </div> </a>   \n"+
	
"<a  class='newmenu' href='./myqueue.xhtml'><div >	\n"+
	''+" My queue  </div> </a>   \n"+


"<a class='newmenu' href='requirements.xhtml'><div >	\n"+
	''+"Settings </div> </a> \n"+

//"<a href='#'  class='newmenu'><div> About </div></a>   \n"+

" <div class='newmenu' style='float:right;text-align:right;font-size:12px;font-weight:normal; padding-top:15px'>"+myname+" <br> "+scaninfo+" <br /> <a href='#' onclick='PrimeFaces.ab({s:\"form_logout:j_idt25\"}); PrimeFaces.ab({s:\"form_logout:j_idt26\"}); PrimeFaces.ab({s:\"form_logout:j_idt26\"});PrimeFaces.ab({s:\"form_logout:j_idt27\"});PrimeFaces.ab({s:\"form_logout:j_idt28\"}); PrimeFaces.ab({s:\"form_logout:j_idt29\"}); var lgut=setTimeout(function(){location.reload();},500);' >Log out</a><div >	\n     </div> ");

$("body").append("<div class='myfooter'> "+$("#submenu-version").text()+" - &copy; 2016 Breakpoint Security GmbH - All rights reserved. Provided by: App Ray GmbH.<span style=float:right;><a href='mailto:info@app-ray.co'>Send feedback / Request support</a></span></div> ");

$(".newheader a, .myfooter a").css("color", "white");

$("body").css("padding-bottom", "150px");

$(".container-fluid, table[role=grid]").css("margin-bottom", "20px");

$(".tab-header").css("background", "#ccc");
$(".tab-header").css("color", "#333");
$(".callout").css("color", "#333").css("background-color", "white").css("-webkit-box-shadow", "0").css("-moz-box-shadow", "0").css("box-shadow", "0");

$(".tabbable.black-box .nav-tabs li a").css("background-image", "none").css("background-color", "#999");

$(".detgrow").removeClass("detgrow").addClass("detrow");

$(".inner-well").css("-webkit-box-shadow", "0").css("-moz-box-shadow", "0").css("box-shadow", "0");

$(".black-box, .white, .white tbody, .white tbody tr ").css("background", "#fff");
$(".black-box, .white, .white tbody, .white tbody tr ").css("color", "#333");

$(".black-box a").css("color", "#555");

$("#secondary").css("background", "none");
$("#secondary").css("background-color", "#333");


$(".tabbable.black-box .nav-tabs li.active a").css({background: "none", backgroundColor:"#ddd"});


$(".tabbable.black-box .tab-content").css({background: "none", backgroundColor:"#ddd"});

$(".inner-well").css("background-color", "#fff");

if($("nav").length==0)
{
	// not logged in
	
	$(".newheader").remove();
	$("body").css("background-color", "#155f78");
	$(".container-fluid").css("margin-bottom", "0px");
	$("body").css("padding-bottom", "0px");
	
	$(".ui-button").css("margin-bottom", "15px");
	
	$(".container-fluid:last").css('background-image', 'url(http://app-ray.co/wp-content/uploads/2015/08/appraybg.png)');
	$(".container-fluid:last").css('background-repeat', 'no-repeat');
	$(".container-fluid:last").css('background-size', '100% auto');
	$(".container-fluid:last").css('min-height', '90%');
	
	$("#logo_login").replaceWith("<img src=\"http://app-ray.co/appraylogin.png\" style=\"width:350px;margin-left:40px\" />");
}

$(".top-nav").remove();
$("#primary").remove();
$("#logo").remove();
$(".copyright").remove();

$(".logo-icon").css("color", "#333");

$("#login-link, #register-link").css("color", "#333");

$("button[type=submit], .ui-button").css({background: "none", backgroundColor: "#155f78", color:"#fff"});

$(".input-group input").css({backgroundColor: "#eee", color: "#333"});

$(".tab-header").css("border-radius", "0");

$("#wait_message, #wait_message i, #wait_message span, .icon-question-sign").css("color", "#333");

$(".black-box, .black-box .separator a").css("text-shadow", "none");


$(".fa-upload").replaceWith("<img src=\"http://app-ray.co/upload.png\" style=\"width:100px;margin-top:20px\" />");
$(".fa-cloud-download").replaceWith("<img src=\"http://app-ray.co/gplay.png\" style=\"width:100px;margin-top:20px\" />");
	
	
	
$("#wrapper").show();

console.log("its working");


$(window).resize(function()
{
	$(".sourceContentWrapper").width((parseInt($(".container-fluid:first .tex").width())-300)+"px");
});

$(".sourceContentWrapper").width((parseInt($(".container-fluid:first .tex").width())-300)+"px");

$(".ui-treenode-label").on("click", function()
                           {
                             var tt = setTimeout(function(){
                                                   
                             $(".sourceContentWrapper").width((parseInt($(".container-fluid:first .tex").width())-300)+"px");
                                                   },2200);
                           });



						   
						   