import React from "react"
import { TodoItem} from '../../types/todo'
import {Card} from "../Card/Card"
import {StyledList} from "../SytledList/StyledList";
import {Text} from "../StyledText/StyledText";
import {CardTitle} from "../Card/CardTitle";

export const Todo = ({list}: {list: TodoItem[]}) => {

    return <Card>
            <CardTitle title={"Household Tasks"}></CardTitle>
            <StyledList>
                {list.length ? list.map((item: TodoItem) => (
                    <li key={item.id}>
                        <Text>{`Assignee: ${item.name}`}</Text>
                        <Text>{`Action: ${item.action}`}</Text>
                    </li>)
                ) : <div style={{
                    height: "67px",
                    backgroundColor: "azure",
                    width: "95%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom :"10px"

                }}>No items added to list</div>}
            </StyledList>
        </Card>
}
