export function Calcultate(weight: number, height: number) {
  return weight / (height * height);
}

export function IMCResult(imc: number): string {
  if (imc < 17) {
    return "Muito abaixo do peso";
  } else if (imc >= 17 && imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade I";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade II (severa)";
  } else {
    return "Obesidade III (mórbida)";
  }
}
