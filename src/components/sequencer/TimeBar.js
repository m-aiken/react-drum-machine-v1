import React from 'react';

function TimeBar(props) {
  const { index } = props;
  return (
    <th scope="col">
      <div className={index + 1 !== 1 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 2 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 3 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 4 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 5 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 6 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 7 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 8 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 9 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 10 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 11 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 12 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 13 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 14 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 15 ? 'tb-box' : 'tb-box-active'} />
      <div className={index + 1 !== 16 ? 'tb-box' : 'tb-box-active'} />
    </th>
  );
}

export default TimeBar;
