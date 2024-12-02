import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit{
  number = 29; // Hardcoded value
  isPrime: boolean = false;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.isPrime = this.numberService.ChkPrime(this.number);
  }
}
