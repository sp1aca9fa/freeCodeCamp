const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const outputBox = document.getElementById("output-box");
const output = document.getElementById("output");

const convert = (number) => {
  if (number === 0) {
    return ''
  }

  if (number >= 1 && number < 4) {
    return "I" + convert(number-1)
  }

  if (number >= 4 && number < 5) {
    return "IV" + convert(number-4)
  }

  if (number >= 5 && number < 9) {
    return "V" + convert(number-5)
  }

  if (number >= 9 && number < 10) {
    return "IX" + convert(number-9)
  }
  
  if (number >= 10 && number < 40) {
    return "X" + convert(number-10)
  }

  if (number >= 40 && number < 50) {
    return "XL" + convert(number-40)
  }

  if (number >= 50 && number < 90) {
    return "L" + convert(number-50)
  }
  
  if (number >= 90 && number < 100) {
    return "XC" + convert(number-90)
  }

  if (number >= 100 && number < 400) {
    return "C" + convert(number-100)
  }

  if (number >= 400 && number < 500) {
    return "CD" + convert(number-400)
  }

  if (number >= 500 && number < 900) {
    return "D" + convert(number-500)
  }

  if (number >= 900 && number < 1000) {
    return "CM" + convert(number-900)
  }

  if (number >= 1001) {
    return "M" + convert(number-1000)
  }


}

const checkInput = () => {
  const input = parseInt(number.value)

  if (input === 0) {
    outputBox.style.removeProperty("display");
    output.innerText = result;
    return
  }

  if (number.value === '') {
    outputBox.style.removeProperty("display");
    output.innerText = 'Please enter a valid number.';
    return
  }

  if (input < 0) {
    outputBox.style.removeProperty("display");
    output.innerText = 'Please enter a number greater than or equal to 1';
    return
  }

  if (input >= 4000) {
    outputBox.style.removeProperty("display");
    output.innerText = 'Please enter a number less than or equal to 3999';
    return
  }

  outputBox.style.removeProperty("display");
  output.innerText = convert(input)
  number.value = ""
}

button.addEventListener("click", checkInput)