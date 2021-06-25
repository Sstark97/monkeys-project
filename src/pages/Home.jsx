import React from 'react';
import useAxios from '../hooks/useAxios';


const Home = () => {
    const data = useAxios('categories').response;


    return (
        <>
            <h2>Hello Monkeys!</h2>
            <h3>Let's do these</h3>
            <ul>
                {data !== undefined ? data.map(category => <li key={category.categoryId}>{category.name}</li>) : <></>}
            </ul>
            {console.log(data)}
        </>
    );
}

export default Home;