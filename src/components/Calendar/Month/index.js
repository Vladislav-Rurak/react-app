import { getMonth } from "date-fns";
import React from "react";

const WEEK_DAYS = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
];

const YEAR_MONTH = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const getWeekDays = () =>
  WEEK_DAYS.map((d) => <th>{d}</th>);

const getMonthName = () =>
  YEAR_MONTH.map((m) => (
    <span>{m} </span>
  ));

function Month({ currentDate }) {
  function MonthName(i) {
    if (
      getMonth(currentDate) ==
      YEAR_MONTH[i]
    ) {
      return getMonthName(
        YEAR_MONTH[i]
      );
    }
  }
  return (
    <section>
      <table>
        <caption>
          {MonthName(YEAR_MONTH)}
          {getMonth(currentDate)}
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
