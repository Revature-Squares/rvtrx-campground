import { BookingRental } from 'data/bookingrental.model';
import { Rental } from '../rental.model';

export const rentals: Rental[] = [
  {
    id: '1',
    lotNumber: '1',
<<<<<<< HEAD
    size: '5x5',
    capacity: 2,
    SiteName: 'tent',
=======
      size: '5x5',
      capacity: 2,
      SiteName: 'tent',
>>>>>>> 1e95a88... fixed issues in testing with rental-unit
    status: 'available',
    price: 100,
  },
  {
    id: '2',
    lotNumber: '2',
<<<<<<< HEAD
    size: '5x5',
    capacity: 5,
    SiteName: 'rv',
=======
      size: '5x5',
      capacity: 5,
      SiteName: 'rv',
>>>>>>> 1e95a88... fixed issues in testing with rental-unit
    status: 'available',
    price: 100,
  },
];

export const rental: BookingRental = {
  lodgingRentalId: 1,
};
