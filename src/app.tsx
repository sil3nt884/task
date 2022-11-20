import React from "react"
import {Container} from "./components/container";
import {Todo} from "./components/todo/Todo";
import {TodoItem} from "./types/todo";
import {DinnerMenu} from "./components/DinnerMenu/DinnerMenu";
import {DinnerItem} from "./types/DinnerItem";
export const App = () : JSX.Element => {

     const lists: TodoItem[] = []
     const DinnerItems : DinnerItem[] = []


    return <Container>
        <section>
            <DinnerMenu DinnerItems={DinnerItems}></DinnerMenu>
        </section>
        <section>
            <Todo list={lists}></Todo>
        </section>
    </Container>
}



