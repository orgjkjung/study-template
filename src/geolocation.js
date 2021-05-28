/* This code collects the user's geolocation (i.e. city, state, country) 
at the time of installation */


var options = {
    enableHighAccuracy: true, 
    timeout: 5000, 
    maximumAge: 0
};

module.exports = { 
    error(err) {
            console.warn('ERROR(${error.code}): ${err.message}'); 
    },

    success(pos) {
        var crd = pos.coords; 
        var lat = crd.latitude
        var lon = crd.longitude
        resolve(lat, lon)
    },

    // returns a promise object containing the latitude and longitude
    getGeolocation() {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(function(pos){
              lat = pos.coords.latitude
              lon = pos.coords.longitude
              resolve({lat,lon});
          }) 
        })
      },

      async main() {
        value = await module.exports.getGeolocation(); // wait for getGelocation to complete
        return value;
    }
};