import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  constructor(private http: HttpClient) { }

  generateLicenses(request, customer_name) : void {
    this.http.post('http://localhost:3000/api/licenses', request)
      .subscribe(response => { 
        var filename = customer_name + '-' + request.product + '-' + request.expiration_date;
        this.saveData(response, filename);
       });
  }

  saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute('style', "display: none" );
    return function (data, fileName) {
        var json = JSON.stringify(data, null, 4),
            blob = new Blob([json], {type: "application/json"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
}
