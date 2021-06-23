import React from 'react';
import useAxios from '../hooks/useAxios';


const Home = () => {
    const data = useAxios().response;


    return (
        <>
            <h2>Hello Monkeys!</h2>
            <h3>Let's do these</h3>
            <ul>
                {data !== null ? data.map(category => <li key={category.categoryId}>{category.name}</li>) : <></>}
            </ul>
        </>
    );
}

export default Home;