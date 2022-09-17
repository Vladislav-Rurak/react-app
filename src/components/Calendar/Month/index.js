import { getMonth, getWeeksInMonth, getYear } from 'date-fns';
import React from 'react';

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const YEAR_MONTH = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const getMonthName = currentdate => {
  return YEAR_MONTH[currentdate.getMonth()];
};

const getWeekDays = () => WEEK_DAYS.map(d => <th>{d}</th>);

function Month ({ currentDate }) {
  return (
    <section>
      <table>
        <caption>
          {getMonthName(currentDate)} {getYear(currentDate)}
        </caption>
        <thead>
          <tr>{getWeekDays()}</tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Month;
