import React, {FormEvent} from "react";
import {DinnerItem} from "../../types/DinnerItem";
import {Card} from '../Card/Card'
import {StyledList} from "../SytledList/StyledList";
import {DinnerText} from "../StyledText/StyledText";
import {CardTitle} from "../Card/CardTitle";
import {DinnerItemForm} from './DinnerItemForm'
import styled from "styled-components";

export  const DinnerMenu  =({dinnerItems}: {dinnerItems: DinnerItem[]}) => {

    const XButton = styled.button`
    color: white;
    background-color: #f53c3cd4;
    display: grid;
    top: -12px;
    position: relative;
    top: -36px;
    left: 571px;
    border-radius: 4px
    &:active {
         outline: none;
         box-shadow: 0 0 0 6px white;
    }
    
    `

    const handleClick = async (item : DinnerItem) => {
        await fetch(`/removeDinner/${item.id}`, {method: "GET"})
        window.location.href = "/"
    }


    return <Card>
        <CardTitle title={"Dinner Menu"}></CardTitle>
        <StyledList>
            {
               dinnerItems.length ? dinnerItems.map((item: DinnerItem) => (
                    <li key={item.id}>
                        <DinnerText>{`Name: ${item.name}`}</DinnerText>
                        <DinnerText>{`URL: ${item.url}`}</DinnerText>
                        <XButton onClick={() => handleClick(item)}>X</XButton>
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
