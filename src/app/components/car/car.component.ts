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

export class CarComponent {
  public info: Car = { 
    name:'Ferrari',
    mileage: 2000,
    tankVolume: 10,
    quantityGas: 7,
    characteristics: [
      'Двигатель 2 литра',
      'Вес в 1100 кг',
      'Разгон от 0-100',
      'Модель Ferrari F40',
      'Дизайн Pininfarina'
    ]
  };
  public hideBtnFill: boolean = true;

  constructor() { }

  public ride(): void {
    if (this.info.quantityGas <= 0) {
      return console.log('Машина не едет :(  Нужно заправить бак!');
    }

    this.info.mileage++;
    this.info.quantityGas--;

    console.log(`Машина едет. Пробег =  ${this.info.mileage}  бензин в баке = ${this.info.quantityGas}`);

    if (this.info.quantityGas < 3) {
      this.hideBtnFill = false;
      console.log('Нужно заправить бак!');
    }
  }

  public fill(): void {
    this.info.quantityGas = (this.info.quantityGas + 1 <= this.info.tankVolume) ? this.info.quantityGas + 1 : this.info.quantityGas;
    console.log(`Заправка. Пробег =  ${this.info.mileage}  бензин в баке = ${this.info.quantityGas}`);

    if (this.info.quantityGas >= 3) {
      this.hideBtnFill = true;
    } else {
      console.log('Желательно еще заправить бак!');
    }
  }
}
