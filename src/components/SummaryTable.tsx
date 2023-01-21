import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { GenerateDatesFromYearBeginning } from "../util/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summurayDates = GenerateDatesFromYearBeginning();

const minimumSummuaryDateSize = 18 * 7;
const amountOfDaysToFill = minimumSummuaryDateSize - summurayDates.length;

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number
}>

export function SummurayTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() =>{
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }) 
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div
              key={`${day} - ${i}`}
              className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold"
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">

        {/* Display the Summary */}
        {summurayDates.map((date) => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return <HabitDay 
          key={date.toString()} 
          amount={dayInSummary?.amount} 
          completed={dayInSummary?.completed}
          date={date}
          />;
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-zinc-900 border-2 border-zinc-800 opacity-40 cursor-not-allowed"
              ></div>
            );
          })}
      </div>
    </div>
  );
}
