const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

// const regex = /[^A-Za-z0-9 -]/

const check = () => {
  const regex = /[^A-Za-z0-9]/g
  const filteredInput = input.value.toLowerCase().replace(regex,'')

  if (input.value === "") {
    alert("Please input a value");
  } else if (filteredInput === filteredInput.split("").reverse().join('')) {
    // alert(filteredInput.split("").reverse().join(''))
    result.innerText = `${input.value} is a palindrome.`
  } else {
    // alert(filteredInput.split("").reverse().join(''))
    result.innerText = `${input.value} is not a palindrome.`
  }
}

button.addEventListener("click", check)