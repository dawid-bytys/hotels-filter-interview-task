export type HotelData = Readonly<{
  name: string;
  address1: string;
  address2?: string;
  starRating: number;
  images: Image[];
  rooms: Readonly<{
    name: string;
    maxAdults: number;
    maxChildren: number;
    description: string;
  }>[];
}>;

export type Hotel = Readonly<{
  id: string;
  name: string;
  description: string;
  address1: string;
  address2?: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: Facility[];
  telephone: string;
  email: string;
  images: Image[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position?: Position;
}>;

interface Facility {
  readonly code: string;
}

interface Image {
  readonly url: string;
  readonly alt?: string;
}

interface Position {
  readonly latitude: string;
  readonly longitude: string;
  readonly timezone: string;
}

export interface Rooms {
  readonly rooms: Room[];
  readonly ratePlans: RatePlan[];
}

type RatePlan = Readonly<{
  id: string;
  shortDescription: string;
  longDescription?: string;
  prePayment: string;
  cancellationPolicy?: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
}>;

type CancellationPolicy = Readonly<{
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  amount: number;
  hour?: string;
  days?: number;
}>;

type Room = Readonly<{
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: Occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: RoomImage[];
  facilities: RoomFacility[];
}>;

interface RoomFacility {
  readonly code: string;
  readonly name: string;
}

interface RoomImage {
  readonly url: string;
  readonly alt: Alt;
}

enum Alt {
  Empty = '',
  Image1 = 'image 1',
  LivingRoom = 'living room',
  Music = 'music',
}

interface Occupancy {
  readonly maxAdults: number;
  readonly maxChildren: number;
  readonly maxOverall: number;
}
