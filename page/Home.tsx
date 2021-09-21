import React from 'react';
import { useRecoilValue } from 'recoil';
import { rawPersonelData } from '../store/atoms';

const Home = () => {
  const rawData = useRecoilValue(rawPersonelData);
  return <pre>{JSON.stringify(rawData.results, null , '  ')}</pre>;
};

export default Home;
