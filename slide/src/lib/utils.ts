import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getMonth = (month:number)=>{
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  if(month<=12 && month>0){
    return months[month-1]
  }
  return "ENTER CORECT MONTH!"
}

export const duplicateValidation = (arr:string[], el:string) => {
  if(!arr.find((t)=> t === el)) {
    arr.push(el)
    return arr
  } else {
    arr = arr.filter((t)=> t !== el)
    return arr
  }
}