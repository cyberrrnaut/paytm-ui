import { useState, useEffect } from 'react';
import axios from "axios";


export const Balance = ({ amount }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/account/balance`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
                // Handle error appropriately
            }
        };

        fetchBalance();
    }, []); // Empty dependency array ensures useEffect runs once

    return (
        <div className="pl-2">
            <span className="font-bold">Your Balance</span>
            <span className="font-bold pl-2">Rs {balance}</span>
        </div>
    );
};
