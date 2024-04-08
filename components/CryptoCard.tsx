"use client";
import React from "react";

import { Card } from "./ui/card";
interface CryptoCardProps {
  name: string;
  price: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, price }) => {
  return (
    <Card>
      <h1>{name.toUpperCase()}</h1>
      <p>${price.toFixed(2)}</p>
    </Card>
  );
};

export default CryptoCard;
