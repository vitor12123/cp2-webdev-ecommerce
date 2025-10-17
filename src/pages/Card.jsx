import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card() {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        async function fetchCard() {
            const res = await fetch('https://fakestoreapi.com/products/')
            const data = await res.json();
            setDetails(data)
        }
        fetchCard()
    },[id])

    if (!details) return <p>Carregando...</p>;

    return(
        <div>
            <div>
                <h2>{details.title}</h2>
                <h3>{details.price}</h3>
                <h3>{details.id}</h3>
            </div>
        </div>
    )
}