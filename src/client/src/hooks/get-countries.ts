import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";
import { PhoneNumber } from "@/types/settings";

export const useCountries = () => {
  const [countries, setCountries] = useState<PhoneNumber[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("https://countries.trevorblades.com/", {
          query: `
            query Countries {
              countries {
                name
                phone
                emoji
              }
            }
          `,
        }).then(response => response.data);
        
        setCountries(response.data.countries);
      } catch (error) {
        if (isAxiosError(error)) console.error(error.message);
      }
    })();
  }, []);

  return { countries };
};