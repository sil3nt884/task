import React from "react";
import {DinnerItem} from "../../types/DinnerItem";
import {Card} from '../Card/Card'
import {StyledList} from "../SytledList/StyledList";
import {DinnerText} from "../StyledText/StyledText";
import {CardTitle} from "../Card/CardTitle";
import {DinnerItemForm} from './DinnerItemForm'

export  const DinnerMenu  =({dinnerItems}: {dinnerItems: DinnerItem[]}) => {



    return <Card>
        <CardTitle title={"Dinner Menu"}></CardTitle>
        <StyledList>
            {
               dinnerItems.length ? dinnerItems.map((item: DinnerItem) => (
                    <li key={item.id}>
                        <DinnerText>{`Name: ${item.name}`}</DinnerText>
                        <DinnerText>{`URL: ${item.url}`}</DinnerText>
                    </li>)
                ) : <div style={{
                   height: "67px",
                   backgroundColor: "azure",
                   width: "95%",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",

               }}>No items added to menu</div>
            }
        </StyledList>
        <DinnerItemForm></DinnerItemForm>
    </Card>

}
