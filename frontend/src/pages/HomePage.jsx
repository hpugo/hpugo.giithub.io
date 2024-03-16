import React, { useReducer, useEffect } from "react";
import { getAll, getAllBySize, getAllSizes, search } from "../services/ShoeService";
import Thumbnails from "../components/Thumbnails";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Sizes from "../components/Sizes";
import NotFound from "../components/NotFound";

const initialState = { shoes: [], sizes: [] };

const reducer = (state, action) => {
    switch (action.type){
        case'SHOES_LOADED':
            return{...state, shoes: action.payload };
        case'SIZES_LOADED':
            return{...state, sizes: action.payload };   
        default:
            return state;
    }
}
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { shoes, sizes } = state;
    const { searchTerm, size } = useParams();

    useEffect(() => {
        getAllSizes().then(sizes => dispatch({type: 'SIZES_LOADED', payload: sizes }));

        const loadShoes = size
        ?  getAllBySize(size)
        : searchTerm 
        ? search(searchTerm) 
        : getAll();
        loadShoes.then(shoes => dispatch ({ type: 'SHOES_LOADED', payload: shoes }))
    }, [searchTerm, size])
    return <>
    <Search />
    <Sizes sizes={sizes}/>
    {shoes.length === 0 && <NotFound linkText="Reset Search" />}
    <Thumbnails shoes={shoes}/>
    </>;
}