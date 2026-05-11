export interface CarSpecification {
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  fuelType: string;
  acceleration: string;
  topSpeed: string;
  mileage: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
  category: 'Luxury' | 'Sports' | 'SUV' | 'Electric';
  specs: CarSpecification;
}

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Mercedes-Benz',
    model: 'S-Class S450',
    year: 2024,
    price: '$114,500',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: '3.0L Inline-6 Turbo',
      power: '362 hp',
      torque: '369 lb-ft',
      transmission: '9-Speed Automatic',
      fuelType: 'Gasoline',
      acceleration: '5.1s (0-60 mph)',
      topSpeed: '155 mph',
      mileage: '20/28 mpg'
    }
  },
  {
    id: '2',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2024,
    price: '$131,300',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '443 hp',
      torque: '390 lb-ft',
      transmission: '8-Speed PDK',
      fuelType: 'Gasoline',
      acceleration: '3.5s (0-60 mph)',
      topSpeed: '191 mph',
      mileage: '18/24 mpg'
    }
  },
  {
    id: '3',
    brand: 'Range Rover',
    model: 'Autobiography',
    year: 2024,
    price: '$141,100',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606148350311-64535359cd2a?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '523 hp',
      torque: '553 lb-ft',
      transmission: '8-Speed Automatic',
      fuelType: 'Gasoline',
      acceleration: '4.4s (0-60 mph)',
      topSpeed: '155 mph',
      mileage: '16/21 mpg'
    }
  },
  {
    id: '4',
    brand: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: '$89,990',
    category: 'Electric',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad42243c5d?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: 'Tri-Motor Electric',
      power: '1,020 hp',
      torque: '1,050 lb-ft',
      transmission: 'Single Speed',
      fuelType: 'Electric',
      acceleration: '1.99s (0-60 mph)',
      topSpeed: '200 mph',
      mileage: '396 miles (range)'
    }
  },
  {
    id: '5',
    brand: 'Audi',
    model: 'RS e-tron GT',
    year: 2024,
    price: '$147,100',
    category: 'Electric',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: 'Dual Electric Motor',
      power: '637 hp',
      torque: '612 lb-ft',
      transmission: '2-Speed Automatic',
      fuelType: 'Electric',
      acceleration: '3.1s (0-60 mph)',
      topSpeed: '155 mph',
      mileage: '232 miles (range)'
    }
  },
  {
    id: '6',
    brand: 'BMW',
    model: 'M8 Competition',
    year: 2024,
    price: '$138,800',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '617 hp',
      torque: '553 lb-ft',
      transmission: '8-Speed Automatic',
      fuelType: 'Gasoline',
      acceleration: '3.0s (0-60 mph)',
      topSpeed: '190 mph',
      mileage: '15/22 mpg'
    }
  }
];
