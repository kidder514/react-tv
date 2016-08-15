(function(window){
	"use strict";
	//profile name
	function CapVerifier(capObject){

		this.profileArr = [
			"+TRICKMODE",
			"+AVCAD",
			"+DL",
			"+IPTV+SDS",
			"+IPTV_URI",
			"+ANA",
			"+DVB_C",
			"+DVB_T",
			"+DVB_S",
			"+ANA",
			"+DVB_C2",
			"+DVB_T2",
			"+DVB_S2",
			"+ISDB_C",
			"+ISDB_T",
			"+ISDB_S",
			"+META_BCG",
			"+META_EIT",
			"+META_SI",
			"+ITV_KEYS",
			"+CONTROLLED",
			"+PVR",
			"+DRM",
			"+CommunicationServices",
			"+SVG",
			"+POINTER",
			"+POLLNOTIF",
			"+WIDGETS",
			"+HTML5_MEDIA",
			"+RCF",
			"+TELEPHONY",
			"+VIDEOTELEPHONY"
			]; 

		this.application = capObject; 
	};

	//take profile name as a parameter and return a html element
	CapVerifier.prototype.returnCap = function(profileName){
		var that = this; 

		var para = document.createElement("li");
		var t = document.createTextNode(profileName);
		para.appendChild(t);

		if(that.application.hasCapability(profileName)){
			para.style.color = "green";
		}else{
			para.style.color = "red";
		}

		return para ; 
	};

	CapVerifier.prototype.toString = function(profileArr){
		var that = this;
		var elements = document.createElement("ul");
		for(var i = 0; i < profileArr.length; i++){
			elements.appendChild(that.returnCap(profileArr[i])); 
		}

		document.getElementById("content").appendChild(elements);
	};

	window.app = window.app || {};
	window.app.CapVerifier = CapVerifier;

})(window);