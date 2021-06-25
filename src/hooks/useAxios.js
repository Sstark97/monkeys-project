import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/';

const useAxios = (endPoint) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = ()=> {
        axios
            .get(endPoint)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;