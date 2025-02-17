import React from 'react';
import { Select } from './styled.js';

const BoroughSelect = ({ doUpdateBorough, borough }) => {
  return (
    <Select onChange={e => doUpdateBorough(e)} value={borough}>
      <option value="bolton">Bolton</option>
      <option value="bury">Bury</option>
      <option value="manchester">Manchester</option>
      <option value="oldham">Oldham</option>
      <option value="rochdale">Rochdale</option>
      <option value="salford">Salford</option>
      <option value="stockport">Stockport</option>
      <option value="tameside">Tameside</option>
      <option value="trafford">Trafford</option>
      <option value="wigan">Wigan</option>
    </Select>
  );
}
export default BoroughSelect;
