{
  const mensagem = "você somou 2 números parabens !";
  let recebePrimeiroNumero = 0;
  let recebeSegundoNumero = 0;

  recebePrimeiroNumero = prompt("Digite o primeiro número");
  recebeSegundoNumero = prompt("Digite o segundo número");
  console.log(mensagem);

  console.log(parseInt(recebePrimeiroNumero) + parseInt(recebeSegundoNumero));
}
