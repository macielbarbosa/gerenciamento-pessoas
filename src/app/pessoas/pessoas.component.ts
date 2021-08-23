import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URL_API } from 'src/utils/constants';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss'],
})
export class PessoasComponent implements OnInit {
  pessoas: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>(URL_API).subscribe((pessoas) => {
      this.pessoas = pessoas;
    });
  }

  cadastrar() {
    this.router.navigate(['/pessoa']);
  }

  editar(id: string) {
    this.router.navigate(['/pessoa', { id }]);
  }
}
