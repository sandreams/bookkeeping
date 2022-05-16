const matchDigit = (str: string): string[] => {
  return str.replace(/\s+/g, '').split(/\+|-/)
}
const matchOperator = (str: string): string[] => {
  return str.replace(/(\s|\d|\.)+/g, '').split('')
}
const sumStr = (str: string) => {
  const digitArray = matchDigit(str)
  const operatorArray = matchOperator(str)
  return operatorArray.reduce((pre, cur, index) => {
    return cur === '+'
      ? pre + Number(digitArray[index + 1])
      : pre - Number(digitArray[index + 1])
  }, Number(digitArray[0]))
}
/**
 * @description: 123+321-54  --> 123+321;  123 --> '' ; 123+ --> '123' ; '' --> ''
 * @param str
 * @return {*}
 */
interface OutPutState {
  numOutput?: string
  calOutput?: string
  modeOutput?: boolean
}
const delCalText = (str: string) => {
  return str.replace(new RegExp(/[-|+]?(?:[\d|.]+)?$/, 'g'), '')
}
export const computeOutput = (
  text: string,
  numText: string,
  calText: string,
  editMode: boolean
): OutPutState => {
  let preCal = calText
  let output = {}
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (calText.endsWith('0') && !/.(?:0+)$/.test(calText)) {
        preCal = calText.slice(0, -1)
      }
      Object.assign(output, { calOutput: preCal + text })
      if (!editMode) {
        Object.assign(output, {
          numOutput: numText === '0' ? text : numText + text,
        })
      } else {
        Object.assign(output, { numOutput: sumStr(preCal + text).toString() })
      }
      break
    case '.':
      if (numText.indexOf('.') < 0 && !editMode) {
        Object.assign(output, { numOutput: numText + text })
      }
      if (calText.endsWith('.')) {
        preCal = calText.slice(0, -1)
      } else if (/[+|-]$/.test(calText)) {
        preCal = preCal + '0'
      }
      const lastNumInput = /[+|-](?:[\d|.]+)$/g.exec(preCal)
      if (
        lastNumInput &&
        lastNumInput[0] &&
        lastNumInput[0].indexOf('.') >= 0
      ) {
        return output
      }
      Object.assign(output, { calOutput: (preCal || '0') + text })
      break
    case '-':
    case '+':
      if (/[+|-]$/.test(calText)) {
        preCal = calText.slice(0, -1)
      }
      Object.assign(output, {
        calOutput: (preCal || '0') + text,
        modeOutput: true,
      })
      break
    case 'backspace':
      if (!editMode) {
        Object.assign(output, { numOutput: numText.slice(0, -1) })
      } else {
        const delCal = delCalText(calText)
        if (!delCal) {
          Object.assign(output, { modeOutput: false })
        } else {
          Object.assign(output, { numOutput: sumStr(delCal).toString() })
        }
        Object.assign(output, { calOutput: delCal })
      }
      break
    case '=':
      const calValue = sumStr(calText).toString()
      Object.assign(output, {
        numOutput: calValue,
        calOutput: calValue,
        modeOutput: false,
      })
      break
    default:
      break
  }
  return output
}
