(function(){
	"use strict";

	var capObject = document.getElementById("capabilities");
	var capVerifier = new app.CapVerifier(capObject);
	capVerifier.toString(capVerifier.profileArr);
})();