import axios from "axios";
import { Lotteries, LotteryResultSimplified } from "../../types/Lottery/LotteryTypes";

class LotteryService {
  private static apiUrl =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados";

  public static async getLotteryResults(
    type: "megasena" | "timemania" | "quina"
  ): Promise<LotteryResultSimplified> {
    try {
      const response = await axios.get<Lotteries>(this.apiUrl);
      const result = response.data[type];

      if (!result) {
        throw new Error(`No results found for ${type}`);
      }

      return {
        numbers: result.dezenas,
        dateInFull: result.dataPorExtenso,
      };
    } catch (error) {
      console.error(`Error fetching results for ${type}:`, error);
      throw error;
    }
  }
}

(async () => {
  try {
    const megaSenaResult = await LotteryService.getLotteryResults("megasena");
    const timemaniaResult = await LotteryService.getLotteryResults("timemania");
    const quinaResult = await LotteryService.getLotteryResults("quina");
  } catch (error) {
    console.error("Error fetching results:", error);
  }
})();

export default LotteryService;