
/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;

// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.


function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
//    alert("onAppReady called!");
    
    // Hide spacer link in header
    $(".hidden").hide();
    
    // Initialise external panels
    $( "body>[data-role='panel']" ).panel();
 
    // Get JQuery version
    var jqVer = $().jquery || "This should never display - no jquery = this not called";
	$( ".jq-version" ).html( jqVer );
    
    // Get JQuery Mobile version
    var jqmVer;
    if ($.mobile) {
        jqmVer = $.mobile.version;
    } else {
         jqmVer = "<b>JQuery mobile failed</b>";
    }
    $(".jqm-version").html(jqmVer);
    
    

    
    // BUTTON CLICK EXAMPLES
    $(".buttonClass").click(function() {
      alert('button class clicked');
    });
    
    $("#buttonId").click(function() {
      alert('button id clicked');
    });
    
    
}

document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;


// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.
