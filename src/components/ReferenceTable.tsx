export default function ReferenceTable() {
  return (
    <table
      className="mx-auto text-neutral-600 text-left 
    md:text-base text-xs"
    >
      <thead className="bg-zinc-100 text-rose-400">
        <tr>
          <th className="px-6 py-2">Classificação</th>
          <th className="px-6 py-2">IMC</th>
        </tr>
      </thead>
      <tbody className="[&>tr:nth-child(even)]:bg-zinc- &>tr:nth:child(odd):bg-white [&>tr>td]:px-6 [&>tr>td]:py-1">
        <tr>
          <td>Muito abaixo do peso</td>
          <td>Menor que 17</td>
        </tr>
        <tr>
          <td>Abaixo do peso</td>
          <td>Entre 17 e 18.5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>18.5 - 24.9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>25 - 29.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 1</td>
          <td>30 - 34.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 2</td>
          <td>35 - 39.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 3</td>
          <td>Acima de 40</td>
        </tr>
      </tbody>
    </table>
  );
}
