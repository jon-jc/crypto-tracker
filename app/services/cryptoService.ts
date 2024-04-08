// services/cryptoService.ts

import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

export const fetchCryptoPrices = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseUrl}/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
};
