import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Label } from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";
import ResultsTable from "./components/ResultsTable";
import { Calcultate, IMCResult } from "./lib/IMC";

export default function App() {
  const [IMCData, setIMCData] = useState<null | {
    weight: number;
    height: number;
    imc: number;
    IMCResults: string;
  }>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    const { weight, height } = data;
    if (!weight || !height) {
      alert("preencha todos os campos");
    }
    const weightNumber = parseFloat(weight.replace(",", "."));
    const heightNumber = parseFloat(height.replace(",", ".")) / 100;
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("ops... você presica preencher o formulário com números válidos");
    }

    if (weightNumber < 2 || weightNumber > 300) {
      alert("coloque informações realistas pelo amor de deus");
    }
    const imc = Calcultate(weightNumber, heightNumber);
    const IMCResults = IMCResult(imc);
    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      imc: imc,
      IMCResults: IMCResults,
    });
    e.currentTarget.reset();
  }

  function handleClickReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIMCData(null);
  }
  return (
    <main className="bg-white max-w-max mx-auto md:py-24 md:px-48 px-5 py-10">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight">Peso em Kg</Label>
            <Input
              disabled={!!IMCData}
              id="weight"
              type="text"
              className="mt-1"
              name="weight"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="height" className="mt-1">
              Altura em cm
            </Label>
            <Input disabled={!!IMCData} id="height" type="text" name="height" />
          </div>
          {IMCData ? (
            <Button onClick={handleClickReset} type="button">
              Resetar
            </Button>
          ) : (
            <Button type="submit">Calcular</Button>
          )}
        </form>
      </section>
      <section id="result" className="py-10 px-4 h-40">
        {IMCData ? (
          <ResultsTable IMCData={IMCData} />
        ) : (
          <p className="text-center text-neutral-400 text-xl">
            Saiba agora se está no seu peso ideal!
          </p>
        )}
      </section>
      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}
