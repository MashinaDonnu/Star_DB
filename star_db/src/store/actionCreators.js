import axios from 'axios'
import {GET_ALL_DATA, GET_ITEM_DATA, GET_RANDOM_PLANET, START_LOADING, STOP_LOADING} from "./actionTypes";

const baseUrl = 'https://swapi.dev/api/'

export function fetchAllData(data) {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.get(baseUrl + data)
            dispatch(getAllData(response.data.results))
            dispatch(stopLoading())
        } catch (e) {
            dispatch(stopLoading())
            throw new Error(e)
        }
    }
}

export function fetchItem(data) {
    return async dispatch => {
        dispatch(startLoading())
        try {
            console.log(baseUrl + data)
            const response = await axios.get(baseUrl + data)
            dispatch(getItem(response.data))
            dispatch(stopLoading())
        } catch (e) {
            dispatch(stopLoading())
            throw new Error(e)
        }
    }
}

export function fetchRandomPlanet() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    return async dispatch => {
        dispatch(startLoading())
        const randId = getRandomIntInclusive(2, 10)
        try {
            const response = await axios.get(`${baseUrl}planets/${randId}`)
            dispatch(getRandomPlanet(response))
            dispatch(stopLoading())

        } catch (e) {
            throw new Error(e)
        }

    }
}

export function getAllData(payload) {
    return {
        type: GET_ALL_DATA,
        payload
    }
}

export function getItem(payload){
    return {
        type: GET_ITEM_DATA,
        payload
    }
}

export function getRandomPlanet(payload) {
    return {
        type: GET_RANDOM_PLANET,
        payload
    }
}

export function startLoading() {
    return {
        type: START_LOADING
    }
}

export function stopLoading() {
    return {
        type: STOP_LOADING
    }
}