class DoctorService {
  getPortlandDoctors() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=xavier&last_name=preciado&query=massage&location=or-portland&skip=0&limit=10&user_key=ff3483a6f4a38e5a6f5dbb31d03d5257`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export default DoctorService;
