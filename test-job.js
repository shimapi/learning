/*
Dada una cadena que contiene solo los caracteres '(', "', 'K', 3, 'C' y 'I', determine si la cadena de entrada es válida.
Una cadena de entrada es válida si:
Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
Los corchetes abiertos deben cerrarse en el orden correcto.
Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo.
*/
s = ['(', ')', '{', '}', '[', ']']

function isValid(s) {
  const stack = [];
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (s[i] !== brackets[last]) {
        console.log('NO')
        return 'NO';
      }
    }
  }
  if (stack.length === 0) {
    console.log('YES')
    return 'YES';
  } else {
    console.log('NO')
    return 'NO';
  }
}

isValid('[]')
isValid("{}")
isValid("()")
isValid("{")
isValid("})")
