import {appReducer, initialState} from "./reducer.jsx";

const createStore = (reducer, initialState) => {
    let state = initialState;
    let listeners = []; // Массив слушателей

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener); // Добавляем слушателя в массив
        return () => {
            listeners = listeners.filter((l) => l !== listener); // Функция для отписки
        };
    };

    const dispatch = (action) => {
        state = reducer(state, action); // Обновляем состояние
        listeners.forEach((listener) => listener()); // Оповещаем всех слушателей
    };

    return {
        dispatch,
        getState,
        subscribe, // Добавляем subscribe в возвращаемый объект
    };
};

export const store = createStore(appReducer, initialState);
