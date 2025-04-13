let Formula = '0';
let Resultado = 0;

function calculo(acao,n) {

    if (acao != 'add') {
        if (isNaN(Formula.charAt(Formula.length - 1))) {
            Formula = Formula.slice(0, -1);
        };
        if (Formula.charAt(Formula.length - 1) == ''){
            return;
        };
    }

    

    if (acao != 'calcular' && acao != 'limpar' && Formula.length >= 20)  {

        alert("Limite de caracteres atingido!");
        return;
    }

    switch (acao) {

        case 'add':

            const FormulaModificada = Formula.split(/[+\-*/]/)[Formula.split(/[+\-*/]/).length - 1].charAt(0)

            if (FormulaModificada == '0' && n == '0'){
                console.log( FormulaModificada )
                return;
            }else if (FormulaModificada == '0' && n != '0') {
                Formula = Formula.slice(0,-1) + n;
            }else{
                Formula += n;
            }

            break;

        case 'somar':

            Formula += '+';
            break;

        case 'subtrair':

            Formula += '-';
            break;

        case 'multiplicar':
            
            Formula += '*';
            break;

        case 'dividir':

            Formula += '/';
            break;

        case 'calcular':

            Resultado = eval(Formula);
            Formula = isFinite(Resultado) == true ? String(Resultado) : '';
            document.getElementById('resultado').textContent = Resultado;
            return;

        case 'limpar':
            Formula = '0';
            break;
    };

    document.getElementById('resultado').textContent = Formula;
};