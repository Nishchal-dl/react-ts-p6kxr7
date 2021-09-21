export type PersonelInformation = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: DateType;
  registered: DateType;
  phone: string;
  cell: string;
  picture: Picture;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type DateType = {
  date: string;
  age: number;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Location = {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
};

export type Timezone = {
  offset: string;
  description: string;
};

export type Coordinates = {
  latitude: string;
  longitude: string;
};
