import { atom } from 'recoil';
import { rawData } from './../data';

export const filters = atom({
  key: 'filters',
  default: [],
});

export const rawPersonelData = atom({
  key: 'RawData',
  default: rawData.results,
});
