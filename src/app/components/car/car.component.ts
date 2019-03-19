import { Component } from '@angular/core';
import { Car } from "../../interfaces/Car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

// Создайте компоненту Car. 
// В компоненте должна содержаться информация о машине в виде объекта с полями 
// название машины, пробег, объем топливного бака,  текущее количество бензина в баке 
// и характеристики (это поле должно быть в виде массива типа [‘Двигатель 2 литра’, ‘мДвигатель 2 литра’ ...] ). 
// В компоненте должны быть методы ехать и заправить. 
// На странице в произвольном формате вывести информацию о машине
// а также вывести кнопки ехать и  заправить при клике на кнопку ехать должен увеличиваться пробег машины 
// и уменьшаться бензин в баке если бензин подходит к нулю то нужно показать кнопку заправиться (изначально она скрыта). 
// Также нужно вывести список характеристик машины в произвольном виде.

export class CarComponent implements Car {
  public name = 'Ferrari';
  public mileage = 2000;
  public tankVolume = 20;
  public quantityGas = 12;
  public characteristics = [
    'Двигатель 2 литра',
    'Вес в 1100 кг',
    'Разгон от 0-100',
    'Модель Ferrari F40',
    'Дизайн Pininfarina'
  ];
  public hideBtnFill = true;

  constructor() { }

  public ride(): void {
    if (this.quantityGas <= 0) {
      return console.log('Машина не едет :(  Нужно заправить бак!');
    }

    this.mileage++;
    this.quantityGas--;

    console.log(`Машина едет. Пробег =  ${this.mileage}  бензин в баке = ${this.quantityGas}`);

    if (this.quantityGas < 10) {
      this.hideBtnFill = false;
      console.log('Нужно заправить бак!');
    }
  }

  public fill(): void {
    this.quantityGas = this.tankVolume;
    console.log(`Заправка. Пробег =  ${this.mileage}  бензин в баке = ${this.quantityGas}`);

    if (this.quantityGas >= 10) {
      this.hideBtnFill = true;
    } else {
      console.log('Нужно еще заправить бак!');
    }
  }
}
