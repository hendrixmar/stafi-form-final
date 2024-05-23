import React, {useEffect, useState} from "react";
import "./index.css";
import {useNavigate} from "react-router-dom"; // Import your styles
import { useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';


function Home() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleButtonClickNavigate = (data) => {
        console.log(data._id);
        navigate(`/forms/${data._id}?api-key=${apiKey}`);
    };

    const handleButtonClickCreate = () => {
        navigate(`/forms?api-key=${apiKey}`);
    };
    const apiKey = searchParams.get('api-key');

    const url = "https://stafi-86f4.restdb.io/rest/forms";
    const headers = {
        "Content-Type": "application/json",
        "x-apikey": apiKey,
    };
    const [data, setData] = useState(null);
    const [header, setHeaders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
                    headers: headers,
                });
                if (!response.ok) {
                    console.log("SDAUHSDJASHDJASHSJ");
                    throw new Error(`Network response was dasdasnot ok ${temp}`);
                }
                const result = await response.json();
                setData(result);


            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleButtonClick = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://stafi-86f4.restdb.io/rest/forms/${data._id}`,
                {
                    method: "DELETE", // or 'POST', 'PUT', 'DELETE', etc.
                    headers: headers,
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            navigate(`/?api-key=${apiKey}`);
        }
    };

    return (

        <div>
            <Button variant="contained" onClick={() => handleButtonClickCreate()}>Create</Button>
            <div className="h-screen flex items-center justify-center">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            company form
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Creation date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            type
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>

                    </tr>
                    </thead>
                    <tbody>

                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {
                                ["person", "creation_date", "type"].map(header => (
                                        <td key={header} className="px-6 py-4">{item[header]}</td>
                                    )
                                )

                            }
                            <td key={header} className="px-6 py-4">
                                <Button variant="contained" onClick={() => handleButtonClickNavigate(item)}>
                                    Edit
                                </Button>
                            </td>
                            <td key={header} className="px-6 py-4">

                                <Button variant="contained" onClick={() => handleButtonClick(item)}>
                                    Delete
                                </Button>
                            </td>

                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Home;
