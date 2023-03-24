function maskCpf(cpf) {
    if (cpf.length !== 11) {
      throw new Error("CPF inválido. Deve conter exatamente 11 dígitos.");
    }
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  
  // Exemplo de uso:
  const cpf = "12345678901";
  const cpfMascarado = maskCpf(cpf);
  console.log(cpfMascarado); // Saída: 123.456.789-01