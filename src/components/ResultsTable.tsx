import { formatNumber } from "../lib/utils";

export default function ResultsTable({
  IMCData,
}: {
  IMCData: {
    weight: number;
    height: number;
    imc: number;
    IMCResults: string;
  };
}) {
  return (
    <table
      className="text-center text-xs md:text-base
             md:[&>tbody>tr>td]:p-2 
             md:[&>tbody>tr>td]:px-4 
             [&>tbody>tr>td]:px-2 text-neutral-600 mx-auto"
    >
      <tbody>
        <tr className="font-bold border-b border-b-rose-400">
          <td>Peso</td>
          <td>Altura</td>
          <td>IMC</td>
          <td>Resultado</td>
        </tr>
        <tr>
          <td>{formatNumber(IMCData.weight, 2)} kg</td>
          <td>{formatNumber(IMCData.height)} m</td>
          <td>{formatNumber(IMCData.imc, 2)}</td>
          <td>{IMCData.IMCResults}</td>
        </tr>
      </tbody>
    </table>
  );
}
