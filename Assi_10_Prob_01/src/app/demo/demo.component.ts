import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{

  additionResult: number = 0;
  subtractionResult: number = 0;

  constructor(private arithmeticService: ArithmeticService) {}

  ngOnInit(): void {
    
    const num1 = 10;
    const num2 = 5;

    this.additionResult = this.arithmeticService.Add(num1, num2);
    this.subtractionResult = this.arithmeticService.Sub(num1, num2);
  }

}
