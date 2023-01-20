import { GenerateDatesFromYearBeginning } from "../util/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summurayDates = GenerateDatesFromYearBeginning()

const minimumSummuaryDateSize = 18 * 7;
const amountOfDaysToFill = minimumSummuaryDateSize - summurayDates.length

export function SummurayTable(){
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div key={`${day} - ${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
              {day}
            </div>)
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summurayDates.map(date =>{
          return (
            <HabitDay key={date.toString()}/>
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill })
        .map((_, i) => { 
          return (
            <div key={i} className="w-10 h-10 rounded-lg bg-zinc-900 border-2 border-zinc-800 opacity-40 cursor-not-allowed"></div>
          )
        })}
      </div>

    </div>
  )
}