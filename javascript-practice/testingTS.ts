const sayAge = () => 18

const myAge = (fn):number => {
    return sayAge()
  }

  console.log(myAge(sayAge))