import { BookingRental } from 'data/bookingrental.model';
import { Rental } from '../rental.model';

export const rentals: Rental[] = [
  {
    id: '1',
    lotNumber: '1',
    size: '5x5',
    capacity: 2,
    siteName: 'tent',
    status: 'available',
    price: 100,
  },
  {
    id: '2',
    lotNumber: '2',
    size: '5x5',
    capacity: 5,
<<<<<<< HEAD
    siteName: 'rv',
=======
    SiteName: 'rv',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cbcce67... rebase issues fixed?
=======
=======
      size: '5x5',
      capacity: 5,
      SiteName: 'rv',
>>>>>>> 1e95a88... fixed issues in testing with rental-unit
>>>>>>> 39df1a4... rebase stuff and things
=======
>>>>>>> ad8c0f5... stage changes problem resolved
    status: 'available',
    price: 100,
  },
];

export const rental: BookingRental = {
  lodgingRentalId: 1,
};
