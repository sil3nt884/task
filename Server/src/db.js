import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import {v4 as uuid} from 'uuid'



const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')


const adapter = new JSONFile(file)
const db = new Low(adapter)

const week1 = [1,2,3,4,6,7]
const week2 = [8,9,10,12,13, 14]
const week3 = [15,16,17,18,19, 20, 21]
const week4 = [22,23,24,25,26,27,28,29, 30, 31]
const weeks =[week1, week2,week3,week4]

export const generateTasks = () => {
   const day = new Date().getDate()

   const [selectedWeek] =weeks.map((week, index) => {
      const foundDay = week.filter(num => num === day).length
      if(foundDay){
         return index
      }
      else {
         return  0
      }
   }).filter(e => e);

   const confirmedWeek = selectedWeek +1
   const tasks=
      {
         1: [
            {
               name: "Ricky",
               action: "Kitchen",

            },
            {
               name: "Jacob",
               action: "Floors",

            }

          ,
            {
               name: "Chloe",
               action: "Washing",

            }
          ],
        2: [ {
           name: "Chloe",
           action: "Kitchen",

        },
           {
              name: "Ricky",
              action: "Floors",

           },
           {
              name: "Jacob",
              action: "Washing",

           }],
        3: [
           {
              name: "Jacob",
              action: "Kitchen",

           },
           {
              name: "Chloe",
              action: "Floors",

           }

           ,
           {
              name: "Ricky",
              action: "Washing",

           }
        ],
        4: [
           {
              name: "Ricky",
              action: "Kitchen",

           },
           {
              name: "Jacob",
              action: "Floors",

           }

           ,
           {
              name: "Chloe",
              action: "Washing",

           }
        ]

      }

   const weekTask = tasks[confirmedWeek]
   return weekTask

}




export const readData = async () => {
   await db.read()
   db.data ||= { dinners: [],tasks: []}
};
export const save =  () => db.write()
export const addDinnerItems  = async (data) => {
   console.log(data)
   await db.read()
   data.id = uuid()
   db.data.dinners.push(data)

}
export const addTask  = async (data) => {
   await db.read()
   data.id = uuid()
   db.data.task.push(data)
}

export const getData = () => db.data
