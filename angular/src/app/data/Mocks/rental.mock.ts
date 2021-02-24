import { BookingRental } from 'data/bookingrental.model';
import { Rental } from '../rental.model';

export const rentals: Rental[] = [
  {
    id: '1',
    lotNumber: '1',
    size: '5x5',
    capacity: 2,
<<<<<<< HEAD
    siteName: 'tent',
=======
    SiteName: 'tent',
>>>>>>> 4c9aa14247e642cc99a57715ea9b82b20d1fe0cd
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
>>>>>>> 4c9aa14247e642cc99a57715ea9b82b20d1fe0cd
    status: 'available',
    price: 100,
  },
];

export const rental: BookingRental = {
  lodgingRentalId: 1,
};
