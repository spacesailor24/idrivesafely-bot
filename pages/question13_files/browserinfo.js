var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}

else if((verOffset=nAgt.indexOf("OPR"))!=-1){
browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
 if ((verOffset=nAgt.indexOf("Version"))!=-1)
 fullVersion = nAgt.substring(verOffset+8);
}

else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}

else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}

else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}

else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}

else if ((verOffset=nAgt.indexOf("MSIE"))!=-1 || (verOffset=nAgt.indexOf("Trident"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 if(nAgt.indexOf("rv:")!=-1){
        fullVersion = '11.0';
 }else{
        fullVersion = nAgt.substring(verOffset+5);
 }
}

else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
if ((verOffset=nAgt.indexOf("Edge"))!=-1) {
	    browserName = "Edge";
	    fullVersion = nAgt.substring(verOffset+5);
	    }
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

var deviceDetection = function () { 
var osVersion, 
device, 
deviceType, 
userAgent, 
isSmartphoneOrTablet; 

device = (navigator.userAgent).match(/Android|iPhone|iPad|iPod|BlackBerry/i); 
ua = navigator.userAgent;
if ( /Android/i.test(device) ) { 
    if ( !/mobile/i.test(navigator.userAgent) ) { 
        deviceType = 'tablet'; 
    } else { 
        deviceType = 'phone'; 
    } 

    osVersion = (navigator.userAgent).match(/Android\s+([\d\.]+)/i); 
    osVersion = osVersion[0]; 
    osVersion = osVersion.replace('Android ', ''); 

} else if ( /iPhone/i.test(device) ) { 
    deviceType = 'phone'; 
    osVersion = (navigator.userAgent).match(/OS\s+([\d\_]+)/i); 
    osVersion = osVersion[0]; 
    osVersion = osVersion.replace(/_/g, '.'); 
    osVersion = osVersion.replace('OS ', ''); 

} else if ( /iPad/i.test(device) ) { 
    deviceType = 'tablet'; 
    osVersion = (navigator.userAgent).match(/OS\s+([\d\_]+)/i); 
    osVersion = osVersion[0]; 
    osVersion = osVersion.replace(/_/g, '.'); 
    osVersion = osVersion.replace('OS ', ''); 
}else if(/BlackBerry/i.test(ua)){ 
deviceType = 'phone';
if(ua.indexOf("Version/") >= 0){ 
Verposition = ua.indexOf("Version/") + 8;
TotLenght = ua.length;
osVersion=ua.substring(Verposition, Verposition + 3);
}else{ 
var SplitUA = ua.split("/");
osVersion=SplitUA[1].substring(0, 3);
}
}
if(!deviceType){
deviceType='PC';
if (navigator.platform.indexOf("Win")!=-1) device="Windows";
if (navigator.platform.indexOf("Mac")!=-1) device="MacOS";
if (navigator.platform.indexOf("X11")!=-1) device="UNIX";
if (navigator.platform.indexOf("Linux")!=-1) device="Linux";
        var OSVer="";
 	if (navigator.userAgent.indexOf("Mac OS X 10.4")!=-1) OSVer="Tiger";
 	if (navigator.userAgent.indexOf("Mac OS X 10.5")!=-1) OSVer="Leopard";
 	if (navigator.userAgent.indexOf("Mac OS X 10.6")!=-1) OSVer="Snow Leopard";
 	if (navigator.userAgent.indexOf("NT 5.1")!=-1) OSVer="XP";
 	if (navigator.userAgent.indexOf("NT 5.2")!=-1) OSVer="Server 2003";
 	if (navigator.userAgent.indexOf("NT 6.0")!=-1) OSVer="Vista";
 	if (navigator.userAgent.indexOf("NT 6.1")!=-1) OSVer="7";
	if (navigator.userAgent.indexOf("NT 6.2")!=-1) OSVer="8";
 	if (navigator.userAgent.indexOf("Win16")!=-1) OSVer="3.11";
 	if (navigator.userAgent.indexOf("Win95")!=-1) OSVer="95";
 	if (navigator.userAgent.indexOf("Windows 95")!=-1) OSVer="95";
 	if (navigator.userAgent.indexOf("Windows_95")!=-1) OSVer="95";
 	if (navigator.userAgent.indexOf("Win98")!=-1) OSVer="98";
 	if (navigator.userAgent.indexOf("Windows 98")!=-1) OSVer="98";
 	if (navigator.userAgent.indexOf("Windows 2000")!=-1) OSVer="2000";
 	if (navigator.userAgent.indexOf("NT 5.0")!=-1) OSVer="2000";
 	if (navigator.userAgent.indexOf("OpenBSD")!=-1) OSVer="Open BSD";
 	if (navigator.userAgent.indexOf("SunOS")!=-1) OSVer="Sun OS";
 	if (navigator.userAgent.indexOf("QNX")!=-1) OSVer="QNX";
 	if (navigator.userAgent.indexOf("BeOS")!=-1) OSVer="BeOS";
 	if (navigator.userAgent.indexOf("OS/2")!=-1) OSVer="OS/2";
 	if (navigator.userAgent.indexOf("NT 10.0")!=-1) OSVer="10";
osVersion=OSVer;
} 
isSmartphoneOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent); 
userAgent = navigator.userAgent; 

return { 'isSmartphoneOrTablet': isSmartphoneOrTablet, 
         'device': device, 
         'osVersion': osVersion, 
         'userAgent': userAgent, 
         'deviceType': deviceType 
        }; 
}();
function isInternetExp () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
function isChrome(){ 
var myNav = navigator.userAgent.toLowerCase();
return (myNav.indexOf('chrome') != -1)?parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10):false;
} 
function isSafari(){
 var browser = navigator.appName;
 var b_version = navigator.appVersion;
 var version = parseFloat(b_version);
 var useragent = navigator.userAgent;
if (useragent.lastIndexOf('Safari/') > 0) {
	                browser = "Safari";
	                version = parseInt(useragent.substr(useragent.lastIndexOf('Safari/') + 7, 7));
                        return  parseInt(client.browserversion);
	            }else{
			return false;
		    }
}
function isSafari3c(){
 var browser = navigator.appName;
 var b_version = navigator.appVersion;
 var version = parseFloat(b_version);
 var useragent = navigator.userAgent;
if (useragent.lastIndexOf('Safari/') > 0) {
                        browser = "Safari";
                        return  parseInt(version);
                    }else{
                        return false;
                    }
} 
function isFireFox(){ 
 var browser = navigator.appName;
 var b_version = navigator.appVersion;
 var version = parseFloat(b_version);
 var useragent = navigator.userAgent;
if (useragent.lastIndexOf('Firefox/') > 0) {
	                browser = "Firefox";
	                version = parseInt(useragent.substr(useragent.lastIndexOf('Firefox/') + 8, 5));
			return version;
	            }else{
			return false;
		    } 
}

function getSystemSpeed(callback){

	var imageAddr,startTime,endTime,downloadSize,download;
	var imageAddr1,startTime1,downloadSize1;
	var imageAddr2,startTime2,downloadSize2;

	imageAddr = "http://speedtest.idrivesafely.netdna-cdn.com/dip-slider-img.jpg" + "?n=" + Math.random();
	downloadSize = 10805;
	download = new Image();
	startTime = (new Date()).getTime();
	download.src = imageAddr;


	imageAddr1 = "http://speedtest.idrivesafely.netdna-cdn.com/teen-slider-img.jpg" + "?n=" + Math.random();
	downloadSize1 = 11096;
	download1 = new Image();
	startTime1 = (new Date()).getTime();
	download1.src = imageAddr1;

	imageAddr2 = "http://speedtest.idrivesafely.netdna-cdn.com/adult-slider-img.jpg" + "?n=" + Math.random();
	downloadSize2 = 11911;
	download2 = new Image();
	startTime2 = (new Date()).getTime();
	download2.src = imageAddr2;

	function getResults(downloadSize,startTime) {
	    var duration = (endTime - startTime) / 1000;
	    if(duration==0){duration=0.001;}
	    var bitsLoaded = downloadSize * 8;
	    var speedBps = (bitsLoaded / duration).toFixed(2);
	    var speedKbps = (speedBps / 1024).toFixed(2);
	    var speedMbps = (speedKbps / 1024).toFixed(2);
	    return speedMbps;
	}

	$(document).ready(function(){
		endTime = (new Date()).getTime();
		var speedMbps= getResults(downloadSize,startTime);
		var speedMbps2= getResults(downloadSize1,startTime1);
		var speedMbps3= getResults(downloadSize2,startTime2);
		var finalSpeedMbps= (parseFloat(speedMbps) + parseFloat(speedMbps2) + parseFloat(speedMbps3))/3;
		finalSpeedMbps=finalSpeedMbps.toFixed(2);
		callback(finalSpeedMbps);
	});


}

