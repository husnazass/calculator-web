// Inisialisasi variabel untuk menyimpan 2 angka dan 1 operator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// Mengambil elemen "0" dari kelas calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen')

// Memperbarui nilai pada layar kalkulator
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        // Mengubah agar tampilan number tidak diawali dengan nol
        currentNumber = number
    } else {
        // Dapat menginput lebih dari satu angka
        currentNumber += number
    }
}

// Mengambil semua elemen button dari kelas number
const numbers = document.querySelectorAll(".number")
// Uji dengan console.log(numbers)

numbers.forEach((number) => {
    // Uji dengan console.log(number)
    number.addEventListener("click", (event) => {
        // Uji dengan console.log("number is pressed")
        // Menyimpan dan menampilkan number dari button yang di klik dengan argumen event dengan target value di HTML
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// Mengambil semua elemen button dari kelas operator
const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        // Memberikan nilai yang tersimpan di currentNumber ke prevNumber
        prevNumber = currentNumber
    }
    // Memberikan argumen operator ke calculationOperator
    calculationOperator = operator
    // Memperbarui currentNumber
    currentNumber = '0'
}

operators.forEach((operator) => {
    // Uji dengan console.log(operator)
    operator.addEventListener("click", (event) => {
        // Uji dengan console.log("operator is pressed")
        // Menyimpan operator dari button yang di klik dengan argumen event dengan target value di HTML
        inputOperator(event.target.value)
    })
})

// Mengambil elemen "=" dari kelas equal-sign
const equalSign = document.querySelector('.equal-sign')

// Mendefinisikan fungsi calculate untuk setiap operator dengan tipe data float
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
             break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// Mengambil elemen "AC" dari kelas all-clear
const clearBtn = document.querySelector('.all-clear')

// Mendefinisikan fungsi clearAll
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    // Uji dengan console.log("AC button is pressed")
    clearAll()
    updateScreen(currentNumber)
})

// Mengambil elemen "." dari kelas decimal
const decimal = document.querySelector('.decimal')

// Mendefinisikan fungsi inputDecimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// Mengambil elemen "%" dari kelas percentage
const percentage = document.querySelector('.percentage')

// Mendefinisikan fungsi inputPercentage
inputPercentage = (percentage) => {
    if (currentNumber.includes('%')) {
        return
    }
}

// Mendefinisikan fungsi untuk menghitung nilai persen
const calculatePercentage = () => {
    currentNumber = parseFloat(currentNumber) / 100
}

percentage.addEventListener('click', (event) => {
    // Uji dengan console.log("percentage button is pressed")
    // Memanggil fungsi untuk menghitung nilai persen
    calculatePercentage()
    // Menyimpan hasil calculatePercentage dengan argumen event dengan target value di HTML
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})

/* Penggunaan kalkulator
    Kalkulator hanya dapat melakukan kalkulasi dengan dua angka dan satu operator
    jika user menginput lebih dari 1 operator atau lebih dari 2 angka, maka kalkulator akan mengkalkulasi operator atau bilangan yang terakhir di input
    contohnya jika user menginput 8*-4+3/2-1 maka kalkulator hanya akan mengkalkulasi 8-1=7
    sehingga jika user ingin mengkalkulasi dengan banyak operator, user harus menyelesaikan setiap perhitungan dengan "="

   Menguji operator, desimal, dan persen
    256.03 / 2 = 128.015
    46 * 3.5 = 161
    65 - 500% = 60
    5.2% + 3.27 = 3.322
    user dapat menggunakan nilai hasil kalkulasi untuk menggunakan kalkulasi lainnya
    3.322% + 23.25 = 23.28322
*/