
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

function loadChat(chatLink){
	if(chatLink == undefined){
		chatLink='IDS';
	}
	var state = new Array;
	state[0]  = 'Alabama';
	state[1]  = 'Alaska';
	state[2]  = 'Arizona';
	state[3]  = 'Arkansas';
	state[4]  = 'California';
	state[5]  = 'Colorado';
	state[6]  = 'Connecticut';
	state[7]  = 'District_of_Columbia';
	state[8]  = 'Delaware';
	state[9]  = 'Florida';
	state[10] = 'Georgia';
	state[11] = 'Hawaii';
	state[12] = 'Idaho';
	state[13] = 'Illinois';
	state[14] = 'Indiana';
	state[15] = 'Iowa';
	state[16] = 'Kansas';
	state[17] = 'Kentucky';
	state[18] = 'Louisiana';
	state[19] = 'Maine';
	state[20] = 'Maryland';
	state[21] = 'Massachusetts';
	state[22] = 'Michigan';
	state[23] = 'Minnesota';
	state[24] = 'Mississippi';
	state[25] = 'Missouri';
	state[26] = 'Montana';
	state[27] = 'Nebraska';
	state[28] = 'Nevada';
	state[29] = 'New_Hampshire';
	state[30] = 'New-Jersey';
	state[31] = 'New-Mexico';
	state[32] = 'New-York';
	state[33] = 'North-Carolina';
	state[34] = 'North-Dakota';
	state[35] = 'Ohio';
	state[36] = 'Oklahoma';
	state[37] = 'Oregon';
	state[38] = 'Pennsylvania';
	state[39] = 'Rhode_Island';
	state[40] = 'South-Carolina';
	state[41] = 'South_Dakota';
	state[42] = 'Tennessee';
	state[43] = 'Texas';
	state[44] = 'Utah';
	state[45] = 'Vermont';
	state[46] = 'Virginia';
	state[47] = 'Washington';
	state[48] = 'West_Virginia';
	state[49] = 'Wisconsin';
	state[50] = 'Wyoming';

	var pageArray = new Array(4);
	pageArray[0] = new Array(2);
	pageArray[0][0]='/sales/displayStateSelection';
	pageArray[0][1]='Sales:State Selection';
	pageArray[1] = new Array(2);
	pageArray[1][0]='/sales/displayCourseSelection';
	pageArray[1][1]='Sales:Course Selection';
	pageArray[2] = new Array(2);
	pageArray[2][0]='/sales/displayCountySelection';
	pageArray[2][1]='Sales:County Selection';
	pageArray[3] = new Array(2);
	pageArray[3][0]='/sales/displayCourtSelection';
	pageArray[3][1]='Sales:Court Selection';
	var strHref = document.URL

	var pageName='';
	var j=0;
	var findPage=false;
		var strQueryString = strHref;
		if(strHref.indexOf("?")>1){
			strQueryString = strHref.substr(0,strHref.indexOf("?"));
		}
		var aQueryString   = strQueryString.split("/");
		if(aQueryString.length>0){
			var lastData=aQueryString[aQueryString.length-1];
			if((lastData == '' || lastData.length==0 || lastData == null) && !(aQueryString[aQueryString.length-2] == 'contactus' || aQueryString[aQueryString.length-2] == 'aboutus' || aQueryString[aQueryString.length-2] == '247support' || aQueryString[aQueryString.length-2] == 'support' || aQueryString[aQueryString.length-2] == 'faq' || aQueryString[aQueryString.length-2] == 'affiliate' || aQueryString[aQueryString.length-2] == 'resources' || aQueryString[aQueryString.length-2] == 'espanol' || aQueryString[aQueryString.length-2] == 'privacy' || aQueryString[aQueryString.length-2] == 'sitemap' || aQueryString[aQueryString.length-2] == 'site_map' || strHref.indexOf('/price/') != -1 || strHref.indexOf('/info/') != -1 || strHref.indexOf('/discountAAA') != -1) ){
				pageName='Home';
				findPage=true;
			}else{
				for(j=0;j<state.length;j++){
					if(lastData.indexOf(state[j]) != -1){
						pageName='Home';
						findPage=true;
						break;
						
					}
				}

			}
		}
	if(findPage == false){
		if(strHref.indexOf('/sales/') != -1 || strHref.indexOf('/price/') != -1 || strHref.indexOf('/info/') != -1 || strHref.indexOf('/contactus') != -1 || strHref.indexOf('/247support') != -1 || strHref.indexOf('/support') != -1 || strHref.indexOf('/faq') != -1 || strHref.indexOf('/aboutus') != -1 || strHref.indexOf('/affiliate') != -1 || strHref.indexOf('/resources') != -1 || strHref.indexOf('/espanol') != -1 || strHref.indexOf('/privacy') != -1 || strHref.indexOf('/sitemap') != -1 || strHref.indexOf('/site_map') != -1  || strHref.indexOf('/aboutus') != -1 || strHref.indexOf('/discountAAA') != -1){
			pageName='Sales:Others';
		}else if(strHref.indexOf('signup') != -1){
                        pageName='Sales:Signup';
        	}else if(strHref.indexOf('course') != -1){
                        pageName='Sales:Course';
        	}
	
		for(j=0;j<=3;j++){
			if(strHref.indexOf(pageArray[j][0])!=-1){
				pageName=pageArray[j][1];
				break;
			}
		}
	}
    window.open('/chat.html?chatLink='+chatLink+'&pageName='+pageName, 'unique','scrollbars=no,menubar=no,resizable=0,location=no,screenX=50,screenY=100,width=325,height=395');
    pageTracker._trackEvent('CSevent','Livechat', window.location.pathname);
}

function delOptionsExpand(val)
{
	var hide = 'delcoll_'+val;
	var show = 'delexpand_'+val;
	document.getElementById(hide).style.display = "none";
	document.getElementById(show).style.display = "block";
}

function displayDeliverySelected(val)
{
	var hide = 'hidedel_'+val;
	var show = 'showdel_'+val;
	var showmain = 'showdelmain_'+val;
	var customdelid = 'customdelivery_'+val;
	var custompredelid = 'custompredelid_'+val;
	document.getElementById(hide).style.display = "none";
	document.getElementById(show).style.display = "block";
	document.getElementById(showmain).style.display = "block";
	document.getElementById(customdelid).value = document.getElementById(custompredelid).value;
	var checkoutid = 'checkout_'+val;
	var panelid = 'panelid_'+val;
	document.getElementById(checkoutid).style.display="block";
	document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
	showdeldef= 'showdeldef_'+val;
	displaydeldef= 'displaydeldef_'+val;
	document.getElementById(displaydeldef).innerHTML = document.getElementById(showdeldef).value;
	var getdelname = 'Getitnow-'+document.getElementById(showdeldef).value;
	pageTracker._trackEvent('event',getdelname, window.location.pathname);
}

function displayDeliverySelect(val)
{
	var showmain = 'showdelmain_'+val;
	var hide = 'hidedel_'+val;  
	var customdelid = 'customdelivery_'+val;
	document.getElementById(showmain).style.display = "none";
	document.getElementById(hide).style.display = "block";
	document.getElementById(customdelid).value = '';

	var checkoutid = 'checkout_'+val;
	var customaudioid = 'customaudio_'+val;
	var customdrid = 'customdr_'+val;
	var panelid = 'panelid_'+val;  
	if (document.getElementById(customdelid).value || document.getElementById(customaudioid).value || document.getElementById(customdrid).value) {
		document.getElementById(checkoutid).style.display="block";
		document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
	} else {
		document.getElementById(checkoutid).style.display="none";
		document.getElementById(panelid).className = 'panel-bottom';
	}
	showdeldef= 'showdeldef_'+val;
	var getdelname = 'Cancel-'+document.getElementById(showdeldef).value;
	pageTracker._trackEvent('event',getdelname, window.location.pathname); 
}

function displayAudioSelected(val, audiopayid)
{
	var show = 'showaudio_'+val;
	var hide = 'hideaudio_'+val;
	customaudioid = 'customaudio_'+val;
	document.getElementById(hide).style.display = "none";
	document.getElementById(show).style.display = "block";
	document.getElementById(customaudioid).value=audiopayid;
	var checkoutid = 'checkout_'+val;
	var panelid = 'panelid_'+val;
	document.getElementById(checkoutid).style.display="block";
	document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
}

function displayAudioSelect(val)
{
	var show = 'showaudio_'+val;
	var hide = 'hideaudio_'+val;
	var customaudioid = 'customaudio_'+val;
	document.getElementById(show).style.display = "none";
	document.getElementById(hide).style.display = "block";
	document.getElementById(customaudioid).value='';
 
	var checkoutid = 'checkout_'+val;
	var customdelid = 'customdelivery_'+val;
	var customdrid = 'customdr_'+val;
	var panelid = 'panelid_'+val;
	if (document.getElementById(customdelid).value || document.getElementById(customaudioid).value || document.getElementById(customdrid).value) {
	        document.getElementById(checkoutid).style.display="block";
		document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
	} else {
        	document.getElementById(checkoutid).style.display="none";
		document.getElementById(panelid).className = 'panel-bottom';
  	}
}

function displayDRSelected(val, id, def) {
	var show = 'showdr_'+val;
        var hide = 'hidedr_'+val;
        customdrid = 'customdr_'+val;
        document.getElementById(hide).style.display = "none";
        document.getElementById(show).style.display = "block";
        document.getElementById(customdrid).value=id;
	var showdef = 'showdrdef_'+val;
	document.getElementById(showdef).innerHTML = def;
        var checkoutid = 'checkout_'+val;
	var panelid = 'panelid_'+val;
        document.getElementById(checkoutid).style.display="block";
	document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
}

function displayDRSelect(val) {
	var show = 'showdr_'+val;
	var hide = 'hidedr_'+val;
	var customdrid = 'customdr_'+val;
	document.getElementById(show).style.display = "none";
	document.getElementById(hide).style.display = "block";
	document.getElementById(customdrid).value='';

	var checkoutid = 'checkout_'+val;
	var customdelid = 'customdelivery_'+val;
	var customaudioid = 'customaudio_'+val;
	var panelid = 'panelid_'+val;
	if (document.getElementById(customdelid).value || document.getElementById(customaudioid).value || document.getElementById(customdrid).value) {
        	document.getElementById(checkoutid).style.display="block";
		document.getElementById(panelid).className = 'panel-bottom panel-bottom1';
	} else {
        	document.getElementById(checkoutid).style.display="none";
		document.getElementById(panelid).className = 'panel-bottom';
  	}
	var showdef = 'showdrdef_'+val;
	var drdefmsg = 'Cancel-'+document.getElementById(showdef).innerHTML;
	pageTracker._trackEvent('event',drdefmsg, window.location.pathname);
}

function displayLabel(val) {
	var hide = "hide"+val;
	var show = "show"+val;
	document.getElementById(hide).style.display = "none";
	document.getElementById(show).style.display = "block";
}

function goGetnow(val,delid, def) { 
	var active = 'active_'+val;
	var active1 = 'active1_'+val;
	var preseldelid = 'custompredelid_'+val;
	
	document.getElementById(active).style.display = "none";
	document.getElementById(active1).style.display = "block";
	document.getElementById(active1).style.opacity = "1";
	document.getElementById(preseldelid).value = delid;
	showdeldef= 'showdeldef_'+val;
	document.getElementById(showdeldef).value = def;
}

function checkOut(val,euid) {
	var customaudio = 'customaudio_'+val;
	var customdr = 'customdr_'+val;
	var customdelivery = 'customdelivery_'+val;
	
	var audio = document.getElementById(customaudio).value;
	var dr = document.getElementById(customdr).value;
	var delivery = document.getElementById(customdelivery).value;
	if (audio || dr || delivery) {
		var url = "/course/displayMyAccountPayment.pl?USERID="+euid+"&MYACCOUNTPAYMENT=1&FROMPAGE=MYACCOUNT";
		var qryStr = '';
		if (audio) {
			qryStr = "&AUDIOPAYMENTSERVICEID="+audio;
		}
		if (dr) {
			qryStr = qryStr+"&DRPAYMENTSERVICEID="+dr;
		}
		if (delivery) {
			var premdel = 'PREMDELUPGRADE'+val;
			if (document.getElementById(premdel).value == 1) {
				qryStr = qryStr+"&PREMDELUPGRADE="+delivery;
			} else {
				qryStr = qryStr+"&DELIVERYID="+delivery;
			}
		}
		url = url + qryStr;
		window.location = url;
	}	
}
function MM_openWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
