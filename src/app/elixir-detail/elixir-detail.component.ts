import { Component, Input, OnInit } from '@angular/core';
import { IElixir } from '../dto/dto';
import { WizardWorldApiService } from '../services/wizard-world-api.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elixir-detail',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './elixir-detail.component.html',
  styleUrl: './elixir-detail.component.css'
})
export class ElixirDetailComponent implements OnInit {
  @Input('id') elixirId!: string;
  public elixirDetail! : IElixir;

  constructor(public wizardWorldService: WizardWorldApiService){}

  ngOnInit(): void {
    this.wizardWorldService.getOneElixirs(this.elixirId).subscribe(data =>
      this.elixirDetail = data
    );
  }

  get inventorsNames(): string{
    return this.elixirDetail.inventors.map(i => i.firstName + ' ' + i.lastName).join(' - ');
  }
}
