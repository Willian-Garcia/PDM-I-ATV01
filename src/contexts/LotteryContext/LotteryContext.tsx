import React, { createContext, useEffect, useState, ReactNode } from "react";
import LotteryService from "../../services/LotteryService/LotteryService";
import { LotteryResultSimplified } from "../../types/Lottery/LotteryTypes";

export const LotteryContext = createContext<LotteryContextProps | undefined>(
  undefined
);

export interface LotteryContextProps {
  results: {
    megasena?: LotteryResultSimplified;
    timemania?: LotteryResultSimplified;
    quina?: LotteryResultSimplified;
  };
  loading: boolean;
  error: string | null;
}

export const LotteryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [results, setResults] = useState<{
    megasena?: LotteryResultSimplified;
    timemania?: LotteryResultSimplified;
    quina?: LotteryResultSimplified;
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const megasena = await LotteryService.getLotteryResults("megasena");
        const timemania = await LotteryService.getLotteryResults("timemania");
        const quina = await LotteryService.getLotteryResults("quina");

        setResults({ megasena, timemania, quina });
      } catch (err) {
        setError("Error fetching results.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <LotteryContext.Provider value={{ results, loading, error }}>
      {children}
    </LotteryContext.Provider>
  );
};