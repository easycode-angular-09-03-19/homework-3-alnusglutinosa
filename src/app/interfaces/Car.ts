export interface Car {
    name: string;
    mileage: number;
    tankVolume: number;
    quantityGas: number;
    characteristics: string[];
    hideBtnFill: boolean;
    ride: () => void;
    fill: () => void;
}