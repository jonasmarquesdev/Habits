import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

export function SummaryTable() {
  return (
    <div className="w-full flex">
      {/* Table Head */}
        <div className="grid grid-rows-7 grid-flow-row gap-3">
          {weekDays.map((weekDay, i) => {
            return (
              <div 
                key={`${weekDay}-${i}`} 
                className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
              >
                {weekDay}
              </div>
            )
          })}
        </div>
      {/* Table Cells */}
        <div className="grid grid-rows-7 grid-flow-col gap-3">
          {summaryDates.map(date => {
            return <HabitDay key={date.toString()} />
          })}
        </div>
    </div>
  )
}