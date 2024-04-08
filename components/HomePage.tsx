// components/HomePage.tsx
"use client";
import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import { fetchCryptoPrices } from "@/app/services/cryptoService";
import CryptoTracker from "./CryptoTracker";

const HomePage: React.FC = () => {
  const [prices, setPrices] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadPrices = async () => {
      try {
        const fetchedPrices = await fetchCryptoPrices();
        setPrices(fetchedPrices);
      } catch (error) {
        console.error("Failed to fetch prices", error);
      }
    };

    loadPrices();
  }, []);

  return (
    <>
      <CryptoTracker />
      <div>
        {Object.entries(prices).map(([key, data]) => (
          <CryptoCard key={key} name={key} price={data.usd} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
