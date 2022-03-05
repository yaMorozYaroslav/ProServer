import React from 'react';

export function Random(){

const months = ["January", "February", "March", "April", "May", "June", "July"];
const random = Math.floor(Math.random() * months.length);


console.log(random, months[random]);
return <>{random, months[random]}</>
}