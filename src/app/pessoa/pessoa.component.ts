import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { URL_API } from 'src/utils/constants';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {
  isEdition: boolean;
  id: any = '';
  urlAPI: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEdition = Boolean(this.id);
    this.urlAPI = `${URL_API}/${this.id}`;
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      birth_at: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.isEdition) {
      this.http.get<any>(this.urlAPI).subscribe((pessoa) => {
        const { name, email, phone, birth_at } = pessoa;
        this.form.setValue({ name, email, phone, birth_at });
      });
    }
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  edit(): void {
    this.http.patch<any>(this.urlAPI, this.form.value).subscribe(() => {
      this.openSnackBar('Pessoa editada.');
      this.backToHome();
    });
  }

  create(): void {
    this.http.post<any>(URL_API, this.form.value).subscribe(() => {
      this.openSnackBar('Pessoa cadastrada.');
      this.backToHome();
    });
  }

  save(): void {
    if (!this.form.valid) {
      this.openSnackBar('Por favor, preencha todos os campos.');
      return;
    }
    if (this.isEdition) {
      this.edit();
    } else {
      this.create();
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Fechar', { horizontalPosition: 'end' });
  }
}
