class Calculator {
  constructor(aimString) {
    this.aimString = aimString
    this.aimArray = aimString.split(' ')
    this.signStack = []
    this.numStack = []
  }

  /**
   * 调用该方法获得计算结果
   */
  calculate() {
    this.inputSignAndNum()
    // 当数字栈只有一个数字时，那就是结果
    while (this.numStack.length !== 1) {
      const calculateTwoNumResult = this.calculateTwoNum()
      this.numStack.push(calculateTwoNumResult)
    }
    return this.numStack.pop()
  }

  /**
   * 将数字和符号分别入栈
   */
  inputSignAndNum() {
    for (const i of this.aimArray) {
      const currFloat = parseFloat(i)
      // 判断是数字还是符号
      if (!isNaN(currFloat)) {
        this.numStack.push(currFloat)
        continue
      }
      const whetherHigher = this.priority(i, this.signStack[this.signStack.length - 1])
      // 判断是否是高优先级符号
      // 对于高优先级符号，先计算栈顶部符号和栈顶部的两个数字，将结果入数字栈
      // 再将符号入栈
      if (i !== ')' && whetherHigher) {
        const calculateTwoNumResult = this.calculateTwoNum()
        this.numStack.push(calculateTwoNumResult)
        this.signStack.push(i)
        continue 
      }
      // 对于非高优先级符号，且不是结束括号，直接入栈
      if (i !== ')') {
        this.signStack.push(i)
      } else {
        // 对于结束括号，先计算结果，并入数字栈
        // 再将起始括号去除
        this.numStack.push(this.calculateTwoNum())
        this.signStack.pop()
      }
    }
  }

  calculateTwoNum() {
    const secondNum = this.numStack.pop()
    const firstNum = this.numStack.pop()
    const neededSign = this.signStack.pop()
    let result = 0.0
    switch (neededSign) {
      case '*':
        result = firstNum * secondNum
        break
      case '/':
        result = firstNum / secondNum
        break
      case '+':
        result = firstNum + secondNum
        break
      case '-':
        result = firstNum - secondNum
        break
      default:
        break
    }
    return result
  }

  priority(firstChar, secondChar) {
    // 执行加法运算
    if (firstChar === '+' && secondChar === '+') return false
    if (firstChar === '+' && secondChar === '-') return false
    if (firstChar === '+' && secondChar === '*') return true
    if (firstChar === '+' && secondChar === '/') return true

    // 执行减法运算
    if (firstChar === '-' && secondChar === '+') return false
    if (firstChar === '-' && secondChar === '-') return false
    if (firstChar === '-' && secondChar === '*') return true
    if (firstChar === '-' && secondChar === '/') return true

    // 执行乘法运算
    if (firstChar === '*' && secondChar === '+') return false
    if (firstChar === '*' && secondChar === '-') return false
    if (firstChar === '*' && secondChar === '*') return false
    if (firstChar === '*' && secondChar === '/') return false

    // 执行除法运算
    if (firstChar === '/' && secondChar === '+') return false
    if (firstChar === '/' && secondChar === '-') return false
    if (firstChar === '/' && secondChar === '*') return false
    if (firstChar === '/' && secondChar === '/') return false

    if (firstChar === '(') return false
  }
}

const test = '1 + 2 * 3 + 3 / ( 3 - 2 )'
const calculator = new Calculator(test)
const result = calculator.calculate()
console.log(result)
