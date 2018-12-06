import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISeller} from './ISeller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) {
  }


  getSellers(): Observable<ISeller[]> {
    return this.http.get<ISeller[]>('http://localhost:50867/api/seller_user');
  }

  getSeller(sellerId) {
    return this.http.get('http://localhost:50867/api/seller_user/' + sellerId);
  }

  deleteSeller(sellerId) {
    return this.http.delete('http://localhost:50867/api/seller_user/' + sellerId);
  }

  addSeller(user: string, nbsales: number, pVote: number, nVote: number, idUser: number) {
    return this.http.post('http://localhost:50867/api/seller_user/', {
      'username': user,
      'nbSales': nbsales,
      'positiveVote': pVote,
      'negativeVote': nVote,
      'idUser': idUser
    });
  }

  updateSeller(user: string, nbsales: number, pVote: number, nVote: number, idUser: number) {
      return this.http.put('http://localhost:50867/api/seller_user/', {
        'username': user,
        'nbSales': nbsales,
        'positiveVote': pVote,
        'negativeVote': nVote,
        'idUser': idUser
      });
    }

  updateSellerPositive( pVote: number) {
    return this.http.patch('http://localhost:50867/api/seller_user/', {
      'positiveVote': pVote
    });
  }

  updateSellerNegative( nVote: number) {
    return this.http.patch('http://localhost:50867/api/seller_user/', {
      'negativeVote': nVote
    });
  }
}
