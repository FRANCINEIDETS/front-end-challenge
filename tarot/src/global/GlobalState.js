import React, {useState, useEffect, useContext} from 'react'
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"
import {imagesUrl} from "../constants/urls"

const GlobalState =(props) => {

    const[cardsNames, setCardsNames] = useState([])
    const [cards, setCards] = useState([])


}