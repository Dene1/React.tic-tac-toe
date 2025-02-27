import {useEffect, useState} from "react";
import {store} from "./store.js";

export const useAppState = () => {
    const [state, setState] = useState(store.getState()); // Инициализируем с начальным
                                                          // состоянием

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState()); // Обновляем состояние при изменении store
        });

        return () => unsubscribe(); // Отписываемся при размонтировании
    }, []);

    const dispatch = (action) => {
        store.dispatch(action);
    };

    return {
        dispatch,
        state,
    };
}
