import { selector } from 'recoil';
import { filters, rawPersonelData } from './atoms';

export const availableState = selector({
  key: 'AvailableState',
  get: ({ get }) => {
    const data = get(rawPersonelData);
    return data.map((info) => info.location.state);
  },
});

export const personelInformation = selector({
  key: 'PersonelInformation',
  get: ({ get }) => {
    const filter = get(filters);
    const data = get(rawPersonelData);
    return filter.reduce((acc, eachStateFilter) => {
      const filteredInformation = data.filter(
        (info) => info.location.state === eachStateFilter
      );
      return [...acc, ...filteredInformation];
    }, []);
  },
});
