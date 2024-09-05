import { Component, OnInit } from '@angular/core';
import { IElixir } from '../dto/dto';
import { WizardWorldApiService } from '../services/wizard-world-api.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-elixirs',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './elixirs.component.html',
  styleUrl: './elixirs.component.css'
})
export class ElixirsComponent implements OnInit{
  public elixirsList! : IElixir[];

  constructor(
    private wizardWorldService : WizardWorldApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.wizardWorldService.getAllElixirs().subscribe(data =>
      this.elixirsList = data
    );
  }

  onElixirClicked(elixirId:string){
    this.router.navigate(['/elixir-detail', elixirId]);
  }
}
