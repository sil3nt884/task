import React, {useEffect, useState} from "react"
import {Container} from "./components/container";
import {Todo} from "./components/todo/Todo";

import {DinnerMenu} from "./components/DinnerMenu/DinnerMenu";



const fetchData = async () => {
    const promises = [
        fetch('/timetable', {method: "GET"}),
        fetch('/dinner', {method: "GET"})
    ]
    const [timetable, dinner] = await Promise.all(promises)
    const timeData = await timetable.json()
    const dinnerData = await dinner.json()
    return {
        timeData,
        dinnerData
    }

}

export const App = () : JSX.Element => {

    const [lists, setList ] = useState([])
    const [dinnerItems, setDinner ] = useState([])
    const [fetching, setFetchData] = useState(true)

    useEffect(()=>{

        const getData = async () => {
            const data = await fetchData()
            const {timeData, dinnerData} =  data
            setList(prevState =>  prevState = timeData)
            setDinner(prevState =>  prevState = dinnerData)
            setFetchData(prevState =>  prevState = false)
        }
        if(fetching) {
            getData();
        }

    }, [])


    return <Container>
        <section>
            <DinnerMenu dinnerItems={dinnerItems}></DinnerMenu>
        </section>
        <section>
            <Todo list={lists}></Todo>
        </section>
    </Container>
}



