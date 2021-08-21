import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEdition = Boolean(this.id);
  }

  isEdition: boolean;
  id: any = '';

  ngOnInit(): void {}
}
