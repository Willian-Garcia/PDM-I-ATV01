interface Lotteries {
  megasena: LotteryResultFull;
  timemania: LotteryResultFull;
  quina: LotteryResultFull;
}

interface LotteryResultFull {
    dataPorExtenso: string;
    dezenas: string[];
    accumulated: boolean;
    specialContest: boolean;
    drawDate: string;
    dateInFull: string;
    nextContestDate: string;
    numbers: string[];
    contestNumber: number;
    winnersCount: number;
    publicationType: number;
    gameType: string;
    nextContestEstimatedPrize: number;
    prizeAmount: number;
  }
  
  interface LotteryResultSimplified {
    numbers: string[];
    dateInFull: string;
  }
  
  export { Lotteries, LotteryResultFull, LotteryResultSimplified };