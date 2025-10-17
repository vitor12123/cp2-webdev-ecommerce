import { useEffect, useState } from "react";
import SectionContainer from "../components/SectionContainer";
import RepoCard from "../components/RepoCard";

export default function Home() {

  const [product, setProduct] = useState([])

  const API = import.meta.env.VITE_API_URL
  
  useEffect(() => {

    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {setProduct(data)})
      .catch(err => console.error(err));
  }, [API])


  return (
    <div>
        <SectionContainer title="produtos">
          <>
          {product.map(card => (
            <RepoCard
            key={card.id}
            {...card}
          />
          ))}
          </>
        </SectionContainer>
    </div>
  );
}
