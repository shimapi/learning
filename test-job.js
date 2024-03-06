
s = ['(', ')', '{', '}', '[', ']']

function isValid(s) {
  let parentesis = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  Object.entries(parentesis).map((p) => {

    const [key, value] = p;
    console.log(p[0])
    console.log(p[1])
    if (!s.includes(key) && !s.includes(value)) {
      console.log('es válida', p)
    } else {
      console.log('no es válida', p)
    }

  })
}

/* isValid('[]')
isValid("{}")
isValid("()") */
isValid("{")
