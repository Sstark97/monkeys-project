import { useState, useEffect } from 'react';
import axios from 'axios';
import { Categories, Product } from '../model/types';

axios.defaults.baseURL = 'https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/';

const useAxios = (endPoint : string) => {
    const [response, setResponse] = useState<Categories[]>([]) || useState<Product>();
    const [error, setError] = useState<string>('');
    const [loading, setloading] = useState<boolean>(true);

    const fetchData = () : void => {
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