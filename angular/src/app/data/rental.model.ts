/**
 * Represents the _Rental_ modei
 *
 * ```yaml
 * id: string;
 * lotNumber: string;
 * unit: RentalUnit;
 * status: string;
 * price: number;
 * discountedPrice?: number;
 * ```
 */
export interface Rental {
  id: string;
  capacity: number;
  discountedPrice?: number;
  lotNumber: string;
<<<<<<< HEAD
=======
  /** type of site
   *  - plotSize
   *    - an interface that is used to find out the size of a plot
   *      ```yaml
   *      width:number
   *      height:number
   *      ```
   *  - amenities
   *    - an interface that talks about what the campsite offers the camper
   *      ```yaml
   *      maxiumumCapacity:number
   *      voltage:number
   *      sewage:string
   *      water:string
   *      ```
   */

  /** booking status, one of:
   *  - available (neither booked nor currently in use)
   *  - booked (booked by someone else, but not in use)
   *  - occupied (currently in use)
   */
  status: string;
  /** normal nightly cost */
>>>>>>> 6454c38... fixed other compile issues with folding rental model
  price: number;
  siteName: string;
  size: string;
  status: string;
  lodgingRentalId?: number;
  size: string;
  capacity: number;
  SiteName: string;
}
