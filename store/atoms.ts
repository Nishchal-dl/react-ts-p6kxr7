import { atom } from 'recoil';
import { rawData } from './../data';

export const filters = atom({
  key: 'filters',
  default: [],
});

export const personelInformation = atom({
  key: 'personelInformation',
  default: [],
});

export const rawPersonelData = atom({
  key: 'RawData',
  default: rawData,
});
