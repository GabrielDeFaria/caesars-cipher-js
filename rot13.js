const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const rot13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabet.indexOf(char);
    if (charIndex === -1) {
      result += char;
    } else {
      result += rot13Alphabet[charIndex];
    }
  }
  return result;
}

function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');
  outputText.innerText = rot13(inputText);
}

function decode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');
  outputText.innerText = rot13(inputText);
}
