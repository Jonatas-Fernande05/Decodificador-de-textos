document.getElementById('encoderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo valores dos inputs
    const textInput = document.getElementById('textInput').value;
    const shiftInput = parseInt(document.getElementById('shiftInput').value, 10);
    
    // Codificar o texto usando a cifra de César
    const encodedText = caesarCipher(textInput, shiftInput);

    // Exibindo o resultado
    document.getElementById('resultOutput').value = encodedText;
});

function caesarCipher(text, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    
    let result = '';
    
    for (let char of text) {
        const index = alphabet.indexOf(char);
        if (index === -1) {
            result += char;
        } else {
            result += shiftedAlphabet[index];
        }
    }
    
    return result;
}
