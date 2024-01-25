// Define _measure library
var _measure = (function() {
    var endpoint = "CF_URL";
  
    // Function to send data to the endpoint
    function sendData(data) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', endpoint, true);
      xhr.withCredentials = true; // allow cookie to be set
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }
  
    // Public methods
    return {
      event: function(eventName, parameters) {
        var data = {
          en: eventName,
          url: window.location.href,
          r: document.referrer,
          p: parameters
        };
        sendData(data);
      },
  
      pageview: function(parameters) {
        this.event('pageview', parameters);
      },

      consent: function(consent) {
        // consent should be an object with "[consent_type]": true/false key value pairs. the consent_type "id" is the only pre-defined one which is used to set a client_id cookie by the server. Other consents can be defined and may be used defined later
        this.event('consent', consent)
      }
    };
  })();
