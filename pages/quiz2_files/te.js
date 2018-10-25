var Pic = new Array();

Pic[1] = '/newsite/images/htdocsimages/images/tabs/tab_certificate_on.gif';
Pic[2] = '/newsite/images/htdocsimages/images/tabs/tab_registration_on.gif';
Pic[3] = '/newsite/images/htdocsimages/images/tabs/tab_payment_on.gif';
Pic[4] = '/newsite/images/htdocsimages/images/tabs/tab_menu_on.gif';
Pic[5] = '/newsite/images/htdocsimages/images/btn/btn_goback_on.gif';
Pic[6] = '/newsite/images/htdocsimages/images/btn/btn_continue_on.gif';
Pic[7] = '/newsite/images/htdocsimages/images/topnav/tab_help_on.gif';
Pic[8] = '/newsite/images/htdocsimages/images/topnav/tab_chat_on.gif';
Pic[9] = '/newsite/images/htdocsimages/images/topnav/tab_toc_on.gif';
Pic[10] = '/newsite/images/htdocsimages/images/topnav/tab_save_on.gif';
Pic[11] = '/newsite/images/htdocsimages/images/topnav/btn_help_on.gif';
Pic[12] = '/newsite/images/htdocsimages/images/topnav/btn_chat_on.gif';
Pic[13] = '/newsite/images/htdocsimages/images/topnav/btn_toc_on.gif';
Pic[14] = '/newsite/images/htdocsimages/images/topnav/btn_save_on.gif';

/*logoOff = new Image()
logoOff.src    = "/newsite/images/comp/logo.gif"
logoOn = new Image()
logoOn.src    = "/newsite/images/comp/logo_on.gif"

logoAAAOff = new Image()
logoAAAOff.src    = "/newsite/images/comp/logo_ids_aaa.gif"
logoAAAOn = new Image()
logoAAAOn.src    = "/newsite/images/comp/logo_ids_aaa_over.gif"
*/

var udwin = null;
function win_popup(url,w,h) {
       if (top.opener && !top.opener.closed) {
                try {
                        opener.location.reload(1);
                }
                catch(e) { }
                   //     window.close();
        }
    udwin = window.open(url,"unique","width="+w+",height="+h+",resize=no,scrollbars=yes");
    udwin.focus();
}

function swapImage(img_name,img_src) {
    document[img_name].src=img_src;
}

function navHelp(userId,lg,https,state,newEmailCss){
    var referer=document.URL;
    var loc;	
        if(lg=='SP'){
		loc='displayHelpMainVarSP.pl';
	}else{
		loc='displayHelpMain.pl';
	} 
    var url = "/sales/"+loc+"?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer;
	if(newEmailCss){
		url = "/sales/"+loc+"?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer+ "&NEWEMAILCSS="+newEmailCss;	
        }
    win_popup(url,500,360);
    if(typeof pageTracker!='undefined'){
    pageTracker._trackEvent('CSevent','NeedHelp', window.location.pathname);
    }
}
function navHelpVar(userId,lg,https,state,dodesigncss,product){
    var referer=document.URL;
    var url = "/sales/displayHelpMainVar.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer+"&DOCSS=" + dodesigncss+"&PRODUCT=" + product;
    win_popup(url,725,360);
   if(state!='Arizona' && state!='New-Jersey' && state!='Ohio' && state!='Virginia'){	
	    pageTracker._trackEvent('CSevent','NeedHelp', window.location.pathname);
      }
}

function navHelpChat(userId,lg,https,state,newEmailCss){
    var referer=document.URL;
    var url = "/sales/displayHelpMain.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer+ "&CHAT=1";
	if(newEmailCss){
                url = "/sales/displayHelpMain.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer+ "&CHAT=1&NEWEMAILCSS="+newEmailCss;
        }
    win_popup(url,500,360);
    pageTracker._trackEvent('CSevent','NeedHelp', window.location.pathname);
}


function navHelpFleet(userId,lg,https){
    var url = "/sales/displayHelpFleet.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https;
    win_popup(url,500,360);
}
function navChat(userId,lg,help)
{
    var referer=document.URL;
    var url = "/sales/displayChat.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&MYREFERER="+referer+"&HELP="+help;
    win_popup(url,472,360);
     pageTracker._trackEvent('CSevent','Livechat', window.location.pathname);
}

function navSave(userId,lg,url){
    document.location.href = url + "?USERID=" + userId + "&LANGUAGE=" + lg;
}

function navNDSSHelp(userId,lg,https,state){
    var referer=document.URL;
	var loc;
        if(lg=='SP'){   
                loc='displayHelpMainVarSP.pl';
        }else{
                loc='displayHelpMain.pl';
        }

    var url = "/sales/displayHelpMain.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&HTTPS=" + https + "&STATE=" + state + "&MYREFERER="+referer+"&LCS=1";
    win_popup(url,500,360);
}

var ie5= (document.getElementById && document.all);
var ns6= (document.getElementById && !document.all);
function menuOver(td) 
{
        if(ie5 || ns6)            td.style.backgroundColor = "#99E1FF";
}

function menuOut(td) 
{
        if(ie5 || ns6)            td.style.backgroundColor = "";
}

 function OpenCertDetails()
 {
          thewindow =window.open('https://www.thawte.com/cgi/server/certdetails.exe?code=USIDRI1-3X', 'anew',config='height=510,width=515,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=yes');
 }


function logoRolloverOn()
{
        //document.logo.src = logoOn.src;
}


function logoRolloverOff()
{
       // document.logo.src = logoOff.src;
}


function logoAAARolloverOn()
{
        //document.logo.src = logoAAAOn.src;
}


function logoAAARolloverOff()
{
        //document.logo.src = logoAAAOff.src;
}

function navNDSSChat(userId,lg,help)
{
    var referer=document.URL;
    var url = "/sales/displayChatNDSS.pl?USERID=" + userId + "&LANGUAGE=" + lg + "&MYREFERER="+referer+"&HELP="+help;
    win_popup(url,472,360);
}


function window_popup(url,w,h,scrollbar) {
          if (top.opener && !top.opener.closed) {
  	  	try {
 	  	  	opener.location.reload(1);
                }
 	    	catch(e) { }
 	  	  	// window.close();
 	   	} 

	var winl = parseInt((screen.width - w) / 2);
	var wint = parseInt((screen.height - h) / 2);
	if(scrollbar==1){
		udwin = window.open(url,"unique","width="+w+",height="+h+",top="+wint+",left="+winl+",resize=no,scrollbars=yes");
		udwin.focus();
	}else{
		udwin = window.open(url,"unique","width="+w+",height="+h+",top="+wint+",left="+winl+",resize=no,scrollbars=no");
		udwin.focus();
	}
}

function onBeforeUnloadAction(e){
/*Catches the IE Browsers and raises COURSE LOGIN page*/
	var browser=navigator.appName;
	if(browser == 'Microsoft Internet Explorer'){
		if((window.event.clientX<0) || (window.event.clientY<0)){
				window_popup("/courseEndLogin.pl",850,950,1);
		}
	}	 
}



