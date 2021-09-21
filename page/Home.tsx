import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filters, rawPersonelData } from '../store/atoms';
import { availableState, personelInformation } from '../store/selectors';
import { PersonelInformation } from '../types/information';

const Home = () => {
  const information =
    useRecoilValue<Array<PersonelInformation>>(personelInformation);
  const state = useRecoilValue<Array<string>>(availableState);
  const setFilter = useSetRecoilState(filters);

  const onChange = (e: any) => {
    if (e.target.checked) {
      setFilter((current) => [...current, e.target.value]);
    } else {
      setFilter((current) => {
        const previous = [...current];
        return previous.splice(previous.indexOf(e.target.value), 1);
      });
    }
  };

  return (
    <section>
      {information.length} entries
      <ul>
        {information.map((info) => (
          <li>
            {info.name.title}. {info.name.first} {info.name.last}
          </li>
        ))}
      </ul>
      <form>
        <label> Filter by State </label>
        {state.map((eachState) => (
          <div>
            <input
              type="checkbox"
              value={eachState}
              name={eachState}
              onChange={onChange}
            />
            <label> {eachState} </label>
          </div>
        ))}
      </form>
      {/* <pre>{JSON.stringify(information[0], null, '  ')}</pre> */}
    </section>
  );
};

export default Home;
