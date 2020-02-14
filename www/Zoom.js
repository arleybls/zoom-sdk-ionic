var PLUGIN_NAME = "Zoom";

// Empty constructor
function ZoomUs() {};

function callNativeFunction(name, args, success, error) {
    args = args || [];
    success = success || function(){};
    error = error || function(){};
    exec(success, error, PLUGIN_NAME, name, args);

};

ZoomUs.prototype.initialize = function(appKey, appSecret, success, error) {
        callNativeFunction('initialize', [appKey, appSecret], success, error);
};

ZoomUs.prototype.login = function(username, password, success, error) {
        callNativeFunction('login', [username, password], success, error);
};

ZoomUs.prototype.logout = function(success, error) {
        callNativeFunction('logout', [], success, error);
};

ZoomUs.prototype.isLoggedIn = function(success, error) {
        callNativeFunction('isLoggedIn', [], success, error);
};


ZoomUs.prototype.joinMeeting = function(meetingNo, meetingPassword, displayName, options, success, error) {
        callNativeFunction('joinMeeting', [meetingNo, meetingPassword, displayName, options], success, error);
};

ZoomUs.prototype.startMeetingWithZAK = function(meetingNo, displayName, zoomToken, zoomAccessToken, userId, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, displayName, zoomToken, zoomAccessToken, userId, options], success, error);
};

ZoomUs.prototype.startMeeting = function(meetingNo, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, "", "", "", "", options], success, error);
};

ZoomUs.prototype.startInstantMeeting: function(options, success, error) {
        callNativeFunction('startInstantMeeting', [options], success, error);
};

ZoomUs.prototype.setLocale = function(languageTag, success, error) {
        callNativeFunction('setLocale', [languageTag], success, error);
};


// Installation constructor that binds to window
ZoomUs.install = function() {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.ZoomUs = new ZoomUs();
	return window.plugins.ZoomUs;
};
cordova.addConstructor(ZoomUs.install);
