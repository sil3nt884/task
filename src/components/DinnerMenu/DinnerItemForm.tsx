import React, {FormEvent, useEffect, useState} from "react";
import styled from "styled-components";
import * as url from "url";


export const DinnerItemForm = () => {


    const StyledInput = styled.input`
    width: 300px;
    display: block;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 4px 6px 8px 33px;
    min-width: 214px;
    
    @media only screen and (max-width: 500px) {
        width: 100%;
    }
    
    }
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




    const formHandler = async (event : FormEvent<any>) => {
        event.preventDefault();
        let nameValue;
        let urlValue;
        const elementName  = document.getElementById("name")
        const elementURL  = document.getElementById("url")
        if( elementName instanceof HTMLInputElement) {
            nameValue = elementName.value
        }
        if(elementURL instanceof HTMLInputElement) {
            urlValue = elementURL.value
        }
        if(nameValue  && urlValue) {
           const data = {
               url : urlValue,
               name: nameValue
           }
           console.log('sending', data)
           try {
               await fetch('/addDinner', {method: "POST", body: JSON.stringify(data), headers: {
                     "Content-Type" : "application/json"
                   }})
                window.location.href = "/"
           }
           catch (e ) {
               if  (e instanceof  Error) {
                    console.log(e.message)
               }
           }
        }

    }

    return <form>
        <div style={{
            display: "table"
        }} key={"addDinner"}>
            <StyledLabel>Name:</StyledLabel>
            <StyledInput   key={"name"} id={'name'} type={"text"}  />
            <StyledLabel>URL:</StyledLabel>
            <StyledInput   key={"url"}    id={'url'} type={"text"}/>
            <StyledButton onClick={formHandler}>Add Item</StyledButton>
        </div>
    </form>
}
