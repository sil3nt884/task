import React, {useEffect, useState} from "react";
import {DinnerItem} from "../../types/DinnerItem";
import {Card} from '../Card/Card'
import {StyledList} from "../SytledList/StyledList";
import {DinnerText} from "../StyledText/StyledText";
import styled from "styled-components";
import {CardTitle} from "../Card/CardTitle";

export  const DinnerMenu  =({DinnerItems}: {DinnerItems: DinnerItem[]}) => {

    const [widthStyle, setWidth] = useState('300px')


    const StyledInput = styled.input`
    width: 300px;
    display: block;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 4px 6px 8px 33px;
    min-width: 214px
 
    }
    `
    const Form = styled.div`
      display: table
    `

    const StyledLabel = styled.label`
        display: grid;
        justify-content: flex-start;
        margin: 0px 41px;
        font-weight: bold;
    `

    const StyledButton = styled.button`
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
             display: inline-block;
            font-size: 16px;
             margin: 4px 2px;
             cursor: pointer;
    `

    const formHandler = () => {}


    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            let smallerWindow = window.innerWidth <= 500
            if(smallerWindow) {
                setWidth('100%')
            }
            else {
                setWidth('300px')
            }
        })
    }, [])

    return <Card>
        <CardTitle title={"Dinner Menu"}></CardTitle>
        <StyledList>
            {
               DinnerItems.length ? DinnerItems.map((item: DinnerItem) => (
                    <li key={item.id}>
                        <DinnerText>{`Name: ${item.name}`}</DinnerText>
                        <DinnerText>{`URL: ${item.URL}`}</DinnerText>
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
        <Form>
            <StyledLabel>Name:</StyledLabel>
            <StyledInput style={{
                width : widthStyle
            }} id={'name'}type={"text"}/>
            <StyledLabel>URL:</StyledLabel>
            <StyledInput style={{
                width : widthStyle
            }}  id={'URL'}type={"text"}/>
            <StyledButton onSubmit={formHandler}>Add Item</StyledButton>
        </Form>

    </Card>

}
