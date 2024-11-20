import React from 'react'
import { Fugaz_One } from 'next/font/google'

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] }); 

export default function Calendar() {
  const year=2024
  return (
    <div>
      Calendar
    </div>
  )
}
