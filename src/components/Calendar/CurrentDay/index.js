import {
  getDate,
  getDay,
} from "date-fns";
import React from "react";

const FULL_WEEK_DAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THIRTDAY",
  "FRIDAY",
  "SATURDAY",
];

function CurrentDay({ currentDate }) {
  return (
    <section>
      <div>
        {
          FULL_WEEK_DAYS[
            getDay(currentDate)
          ]
        }
      </div>
      <div>{getDate(currentDate)}</div>
    </section>
  );
}

export default CurrentDay;
