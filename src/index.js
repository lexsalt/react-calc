import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: true,
      firstInput: false,
      decimal: false,
      zero: false,
      openBracket: false,
      input: [],
      output: [0],
      equalStored: null,
      log: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.pressedDigit1 = this.pressedDigit1.bind(this);
    this.pressedDigit2 = this.pressedDigit2.bind(this);
    this.pressedDigit3 = this.pressedDigit3.bind(this);
    this.pressedDigit4 = this.pressedDigit4.bind(this);
    this.pressedDigit5 = this.pressedDigit5.bind(this);
    this.pressedDigit6 = this.pressedDigit6.bind(this);
    this.pressedDigit7 = this.pressedDigit7.bind(this);
    this.pressedDigit8 = this.pressedDigit8.bind(this);
    this.pressedDigit9 = this.pressedDigit9.bind(this);
    this.pressedDigit0 = this.pressedDigit0.bind(this);
    this.pressedDecimal = this.pressedDecimal.bind(this);
    this.pressedClear = this.pressedClear.bind(this);
    this.pressedAdd = this.pressedAdd.bind(this);
    this.pressedSubtract = this.pressedSubtract.bind(this);
    this.pressedDivide = this.pressedDivide.bind(this);
    this.pressedMultiply = this.pressedMultiply.bind(this);
    this.pressedEqual = this.pressedEqual.bind(this);
  }
  componentDidMount(event) {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event) {
    event.target.blur();
    if ((event.code === "Digit1") | (event.code === "Numpad1")) {
      this.pressedDigit1();
    } else if ((event.code === "Digit2") | (event.code === "Numpad2")) {
      this.pressedDigit2();
    } else if ((event.code === "Digit3") | (event.code === "Numpad3")) {
      this.pressedDigit3();
    } else if ((event.code === "Digit4") | (event.code === "Numpad4")) {
      this.pressedDigit4();
    } else if ((event.code === "Digit5") | (event.code === "Numpad5")) {
      this.pressedDigit5();
    } else if ((event.code === "Digit6") | (event.code === "Numpad6")) {
      this.pressedDigit6();
    } else if ((event.code === "Digit7") | (event.code === "Numpad7")) {
      this.pressedDigit7();
    } else if ((event.code === "Digit8") | (event.code === "Numpad8")) {
      this.pressedDigit8();
    } else if ((event.code === "Digit9") | (event.code === "Numpad9")) {
      this.pressedDigit9();
    } else if ((event.code === "Digit0") | (event.code === "Numpad0")) {
      this.pressedDigit0();
    } else if (
      (event.code === "Period") |
      (event.code === "NumpadDecimal")
    ) {
      this.pressedDecimal();
    } else if (
      (event.code === "Multiply") |
      (event.code === "NumpadMultiply")
    ) {
      this.pressedMultiply();
    } else if (event.code === "Backspace") {
      this.pressedBackSpace();
    } else if (
      (event.code === "Slash") |
      (event.code === "NumpadDivide")
    ) {
      this.pressedDivide();
    } else if (
      (event.code === "Minus") |
      (event.code === "NumpadSubtract")
    ) {
      this.pressedSubtract();
    } else if ((event.code === "Add") | (event.code === "NumpadAdd")) {
      this.pressedAdd();
    } else if (
      (event.code === "Equal") |
      (event.code === "NumpadEnter") |
      (event.code === "Enter")
    ) {
      this.pressedEqual();
    }
    //console.log("Keycode es " + event.keyCode);
    //console.log("Event es " + event.code);
  }
  pressedDigit1() {
    this.state.log.push(1)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [1],
        output: [1]
      }));
      console.log("pressed 1 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [1],
              output: [1],
              equalStored: null
            }));
            console.log("Pressed 1 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(1);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 1 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [1],
              output: [1],
              equalStored: null
            }));
            console.log("Pressed 1 after zero at initialState")
          } else {
            let joined = this.state.input.concat(1);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 1 default")
          }
        }
      }
    }
    //console.log("pressed: 1" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit2() {
    this.state.log.push(2)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [2],
        output: [2]
      }));
      console.log("pressed 2 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [2],
              output: [2],
              equalStored: null
            }));
            console.log("Pressed 2 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(2);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 2 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [2],
              output: [2],
              equalStored: null
            }));
            console.log("Pressed 2 after zero at initialState")
          } else {
            let joined = this.state.input.concat(2);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 2 default")
          }
        }
      }
    }
    //console.log("pressed: 2" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit3() {
    this.state.log.push(3)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [3],
        output: [3]
      }));
      console.log("pressed 3 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [3],
              output: [3],
              equalStored: null
            }));
            console.log("Pressed 3 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(3);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 3 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [3],
              output: [3],
              equalStored: null
            }));
            console.log("Pressed 3 after zero at initialState")
          } else {
            let joined = this.state.input.concat(3);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 3 default")
          }
        }
      }
    }
    //console.log("pressed: 3" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit4() {
    this.state.log.push(4)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [4],
        output: [4]
      }));
      console.log("pressed 4 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [4],
              output: [4],
              equalStored: null
            }));
            console.log("Pressed 4 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(4);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 4 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [4],
              output: [4],
              equalStored: null
            }));
            console.log("Pressed 4 after zero at initialState")
          } else {
            let joined = this.state.input.concat(4);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 4 default")
          }
        }
      }
    }
    //console.log("pressed: 4" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit5() {
    this.state.log.push(5)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [5],
        output: [5]
      }));
      console.log("pressed 5 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [5],
              output: [5],
              equalStored: null
            }));
            console.log("Pressed 5 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(5);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 5 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [5],
              output: [5],
              equalStored: null
            }));
            console.log("Pressed 5 after zero at initialState")
          } else {
            let joined = this.state.input.concat(5);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 5 default")
          }
        }
      }
    }
    //console.log("pressed: 5" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit6() {
    this.state.log.push(6)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [6],
        output: [6]
      }));
      console.log("pressed 6 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [6],
              output: [6],
              equalStored: null
            }));
            console.log("Pressed 6 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(6);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 6 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [6],
              output: [6],
              equalStored: null
            }));
            console.log("Pressed 6 after zero at initialState")
          } else {
            let joined = this.state.input.concat(6);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 6 default")
          }
        }
      }
    }
    //console.log("pressed: 6" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit7() {
    this.state.log.push(7)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [7],
        output: [7]
      }));
      console.log("pressed 7 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [7],
              output: [7],
              equalStored: null
            }));
            console.log("Pressed 7 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(7);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 7 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [7],
              output: [7],
              equalStored: null
            }));
            console.log("Pressed 7 after zero at initialState")
          } else {
            let joined = this.state.input.concat(7);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 7 default")
          }
        }
      }
    }
    //console.log("pressed: 7" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit8() {
    this.state.log.push(8)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [8],
        output: [8]
      }));
      console.log("pressed 8 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [8],
              output: [8],
              equalStored: null
            }));
            console.log("Pressed 8 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(8);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 8 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [8],
              output: [8],
              equalStored: null
            }));
            console.log("Pressed 8 after zero at initialState")
          } else {
            let joined = this.state.input.concat(8);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 8 default")
          }
        }
      }
    }
    //console.log("pressed: 8" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit9() {
    this.state.log.push(9)
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: false,
        zero: false,
        firstInput: true,
        input: [9],
        output: [9]
      }));
      console.log("pressed 9 at initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [9],
              output: [9],
              equalStored: null
            }));
            console.log("Pressed 9 after equal pressed")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(9);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 9 after decimal or operator")
          }
        } else if (this.state.firstInput) {
          if (this.state.input.length === 1 && this.state.input[0] === 0) {
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: [9],
              output: [9],
              equalStored: null
            }));
            console.log("Pressed 9 after zero at initialState")
          } else {
            let joined = this.state.input.concat(9);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log("Pressed 9 default")
          }
        }
      }
    }
    //console.log("pressed: 9" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDigit0() {
    this.state.log.push(0)
    if (this.state.initialState) {
      this.setState((state) => ({ initialState: false, zero: true, firstInput: true, input: [0], output: [0] }));
      console.log("zero as initialState")
    } else if (!this.state.initialState) {
      if (this.state.input.length >= 30) {
        console.log("Input limit reached")
      } else {
        if (!this.state.firstInput) {
          if (this.state.equalStored !== null) {
            this.setState((state) => ({
              firstInput: true, zero: true,
              input: [0],
              output: [0],
              equalStored: null
            }));
            console.log("zero after equal")
          } else if (this.state.equalStored === null) {
            let joined = this.state.input.concat(0);
            this.setState((state) => ({
              firstInput: true,
              zero: true,
              input: joined,
              output: joined,
            }));
            console.log("zero after operator or decimal")
          }
        } else if (this.state.firstInput) {
          if (this.state.zero) {
            console.log("cannot print two zeroes in a row at start")
          } else if (!this.state.zero) {
            let joined = this.state.input.concat(0);
            this.setState((state) => ({
              firstInput: true,
              zero: false,
              input: joined,
              output: joined,
            }));
            console.log("zero default")
          }
        }
      }
    }
    //console.log("pressed: 0" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedDecimal() {
    this.state.log.push(".")
    if (this.state.initialState) {
      let zeroJoined = this.state.input.concat(0);
      let joined = zeroJoined.concat(".");
      console.log("Decimal at initialState");
      this.setState((state) => ({
        initialState: false,
        firstInput: true,
        decimal: true,
        zero: false,
        input: joined,
        output: joined
      }));
    } else if (!this.state.initialState) {
      if (!this.state.firstInput) {
        if (this.state.equalStored !== null) {
          let digits = this.state.output[0].toString().split("")
          let decimalArr = digits.filter(decimalCheck)
          function decimalCheck(decimal) {
            return decimal === ".";
          }
          if (decimalArr.length >= 1) {
            console.log("cannot print two decimal in a number after equal")
          } else if (decimalArr.length === 0) {
            let joined = this.state.input.concat(".");
            this.setState((state) => ({
              firstInput: true,
              decimal: true,
              zero: false,
              input: joined,
              output: joined,
              equalStored: null
            }));
          }
        } else if (this.state.equalStored === null) {
          let zeroJoined = this.state.input.concat(0);
          let joined = zeroJoined.concat(".");
          console.log("decimal as first input");
          this.setState((state) => ({
            firstInput: true,
            decimal: true,
            zero: false,
            input: joined,
            output: joined
          }));
        }
      } else if (this.state.firstInput) {
        if (!this.state.decimal) {
          if (
            (this.state.input[this.state.input.length - 1] === "*") |
            (this.state.input[this.state.input.length - 1] === "/") |
            (this.state.input[this.state.input.length - 1] === "+") |
            (this.state.input[this.state.input.length - 1] === "-")
          ) {
            let addZero = this.state.input.concat(0);
            let joined = addZero.concat(".");
            this.setState((state) => ({
              firstInput: true,
              decimal: true,
              zero: false,
              input: joined,
              output: joined
            }));
            console.log(
              "Added zero because of decimal pressed after operator"
            );
          } else {
            let joined = this.state.input.concat(".");
            console.log("default decimal")
            this.setState((state) => ({
              firstInput: true,
              decimal: true,
              zero: false,
              input: joined,
              output: joined
            }));

          }
        } else if (this.state.decimal) {
          console.log("cannot print two decimal in a number");
        }
      }
    }
    //console.log("pressed: ." + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedClear() {
    this.state.log.push("clear")
    this.setState((state) => ({
      initialState: true,
      firstInput: false,
      decimal: false,
      zero: false,
      input: [],
      output: [0],
      equalStored: null
    }));
    //console.log("pressed: clear" + ", initialState: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedAdd() {
    this.state.log.push("+")
    // initial state input
    if (this.state.initialState) {
      let addPlus = this.state.input.concat(0);
      let joined = addPlus.concat("+");
      this.setState((state) => ({
        initialState: false,
        firstInput: true,
        input: joined,
        output: joined
      }));
      console.log("Pressed plus at initialState");
    }
    // after initial state
    else if (!this.initialState) {
      if (!this.state.firstInput) {
        if (this.state.equalStored !== null) {
          console.log("Added Plus after equal pressed")
          let joined = this.state.equalStored.concat("+");
          this.setState((state) => ({
            firstInput: false,
            decimal: false,
            zero: false,
            input: joined,
            output: joined,
            equalStored: null
          }));
        } else if (this.state.equalStored === null) {
          if (this.state.input[this.state.input.length - 1] === "+" |
            (this.state.input[this.state.input.length - 1] === "/") |
            (this.state.input[this.state.input.length - 1] === "*") |
            (this.state.input[this.state.input.length - 1] === "+") |
            (this.state.input[this.state.input.length - 1] === "-") |
            (this.state.input[this.state.input.length - 1] === ".")
          ) {
            let poped = this.state.input;
            poped.pop();
            console.log("poped: " + poped)
            let operatorReplaced = poped.concat("+");
            this.setState((state) => ({
              firstInput: true,
              input: operatorReplaced,
              output: operatorReplaced
            }));
            console.log("");
          }
        }
      } else if (this.state.firstInput) {
        if (this.state.input[this.state.input.length - 1] === "-" && this.state.input[this.state.input.length - 2] === "(" && this.state.input[this.state.input.length - 3] === "-") {
          let poped = this.state.input;
          poped.pop();
          console.log("poped1>" + poped)
          poped.pop();
          console.log("poped2>" + poped)
          poped.pop();
          console.log("poped3>" + poped)
          let operatorReplaced = poped.concat("+");
          this.setState((state) => ({
            firstInput: false,
            decimal: false,
            zero: false,
            openBracket: false,
            input: operatorReplaced,
            output: ["+"]
          }));
          console.log("Replace double minus with a plus");
        } else if (this.state.input[this.state.input.length - 1] === "-" && (this.state.input[this.state.input.length - 2] === "*" | this.state.input[this.state.input.length - 2] === "*")) {
          let poped = this.state.input;
          poped.pop();
          console.log("poped1>" + poped)
          poped.pop();
          console.log("poped2>" + poped)
          let operatorReplaced = poped.concat("+");
          this.setState((state) => ({
            firstInput: false,
            decimal: false,
            zero: false,
            openBracket: false,
            input: operatorReplaced,
            output: ["+"]
          }));
          console.log("Replace minus after multiply with a plus");

        } else if ((this.state.input[this.state.input.length - 1] === "*") |
          (this.state.input[this.state.input.length - 1] === "/") |
          (this.state.input[this.state.input.length - 1] === "+") |
          (this.state.input[this.state.input.length - 1] === "-") |
          (this.state.input[this.state.input.length - 1] === ".") &&
          (this.state.input[this.state.input.length - 2] !== "(")
        ) {
          let poped = this.state.input;
          poped.pop();
          console.log("poped: " + poped)
          let operatorReplaced = poped.concat("+");
          this.setState((state) => ({
            firstInput: false, decimal: false, zero: false,
            input: operatorReplaced,
            output: operatorReplaced
          }));
          console.log("Replaced with Add operator because only second operator is valid");
        } else if (this.state.input[this.state.input.length - 1] === "-" && (this.state.input[this.state.input.length - 2] === "*" | this.state.input[this.state.input.length - 2] === "/")) {
          let poped = this.state.input;
          poped.pop();
          let operatorReplaced = poped.concat("+");
          this.setState((state) => ({
            firstInput: false, decimal: false, zero: false,
            input: operatorReplaced,
            // i think here below is the bug
            output: ["+"]
          }));
          console.log("After operator, replaced minus with add operator, because only second operator is valid");
        } else if ((this.state.input[this.state.input.length - 1] === "+" | this.state.input[this.state.input.length - 1] === "-") && (this.state.input[this.state.input.length - 2] === "*" | this.state.input[this.state.input.length - 2] === "/")) {
          let poped = this.state.input;
          poped.pop();
          let operatorReplaced = poped.concat("+");
          this.setState((state) => ({
            firstInput: false, decimal: false, zero: false,
            input: operatorReplaced,
            // i think here below is a bug
            output: ["+"]
          }));
          console.log("After operator cannot print two plus operator");
        } else if (this.state.openBracket) {
          let joinedBracket = this.state.input.concat(")");
          let joined = joinedBracket.concat("+")
          this.setState((state) => ({
            firstInput: false,
            decimal: false,
            zero: false,
            openBracket: false,
            input: joined,
            output: joined
          }));
          console.log("added plus operator and closed bracket")
        } else {
          let joined = this.state.input.concat("+");
          this.setState((state) => ({
            firstInput: false,
            decimal: false,
            zero: false,
            input: joined,
            output: ["+"]
          }));
          console.log("Added plus operator")
        }
      }
    }
    // Logging input state info for debugging
    //console.log("pressed: Add " + ", initialInput: " + this.state.initialState + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", firstInput: " + this.state.firstInput + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedSubtract() {
    this.state.log.push("-")
    // initial state input
    if (this.state.initialState) {
      let poped = this.state.input;
      poped.pop();
      let operatorReplaced = poped.concat("-");
      this.setState((state) => ({
        initialState: false,
        firstInput: true,
        input: operatorReplaced,
        output: operatorReplaced
      }));
      console.log("Pressed Minus at initialState");
    }
    // after initial state
    else if (!this.state.initialState) {
      if (this.state.equalStored !== null) {
        console.log("Added Minus after equal pressed")
        let joined = this.state.equalStored.concat("-");
        this.setState((state) => ({
          firstInput: false,
          decimal: false,
          zero: false,
          input: joined,
          output: joined,
          equalStored: null
        }));
      } else if (this.state.equalStored === null) {
        if (!this.state.firstInput) {
          if (this.state.input[this.state.input.length - 1] !== "-") {
            let joined = this.state.input.concat("-");
            this.setState((state) => ({
              initialState: false,
              firstInput: true,
              decimal: false, zero: false,
              input: joined,
              // i think here below is the bug
              output: ["-"]
            }));
            console.log("printed Minus as first input")
          } else if (this.state.input[this.state.input.length - 1] === "-") {
            let joined = this.state.input.concat("(");
            let joined2 = joined.concat("-");
            this.setState((state) => ({
              initialState: false,
              firstInput: true,
              openBracket: true,
              decimal: false,
              zero: false,

              input: joined2,
              // i think here below is the bug
              output: ["-"]
            }));
            console.log("Minus after Minus - bracket opened")
          }
        }
        else if (this.state.firstInput) {
          if (this.state.input[this.state.input.length - 1] === "-") {
            console.log("cannot print two Minus as second input")
          } else if (this.state.input[this.state.input.length - 1] === "+" && (this.state.input[this.state.input.length - 2] === "*" | this.state.input[this.state.input.length - 2] === "/")) {
            let poped = this.state.input;
            poped.pop();
            let operatorReplaced = poped.concat("-");
            this.setState((state) => ({
              firstInput: false, decimal: false, zero: false,
              input: operatorReplaced,
              output: ["-"]
            }));
            console.log("After operator Replaced Plus with Minus operator, because only second operator is valid");
          } else if ((this.state.input[this.state.input.length - 1] === "+" | this.state.input[this.state.input.length - 1] === "-") && (this.state.input[this.state.input.length - 2] === "*" | this.state.input[this.state.input.length - 2] === "/")) {
            let poped = this.state.input;
            poped.pop();
            let operatorReplaced = poped.concat("-");
            this.setState((state) => ({
              firstInput: false, decimal: false, zero: false,
              input: operatorReplaced,
              output: ["-"]
            }));
            console.log("After operator cannot print two Minus operator");
          } else if (
            (this.state.input[this.state.input.length - 1] === "+") |
            (this.state.input[this.state.input.length - 1] === ".")
          ) {
            let poped = this.state.input;
            poped.pop();
            let operatorReplaced = poped.concat("-");
            this.setState((state) => ({
              firstInput: true,
              input: operatorReplaced,
              output: operatorReplaced
            }));
            console.log("Replaced with Minus operator because only second operator is valid");
          } else if (
            this.state.input[this.state.input.length - 1] === "-" &&
            this.state.input[this.state.input.length - 2] === "-"
          ) {
            let poped = this.state.input;
            poped.pop();
            let operatorReplaced = poped.concat("-");
            this.setState((state) => ({
              firstInput: false, decimal: false, zero: false,
              input: operatorReplaced,
              output: operatorReplaced
            }));
            console.log("Cannot print 3 Subtract in a row");
          }
          else {
            let joined = this.state.input.concat("-");
            this.setState((state) => ({
              initialState: false,
              firstInput: false,
              decimal: false, zero: false,
              input: joined,
              output: ["-"]
            }));
            console.log("Added Subtract operator")
          }
        }
      }
    }
    // Logging input state info for debugging
    //console.log("pressed: substract " + ", initialInput: " + this.state.initialState + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", firstInput: " + this.state.firstInput + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)

  }
  pressedDivide() {
    this.state.log.push("/")
    if (this.state.equalStored !== null) {
      console.log("divide pressed after equal pressed")
      let joined = this.state.equalStored.concat("/");
      this.setState((state) => ({
        firstInput: false,
        input: joined,
        output: joined,
        equalStored: null
      }));
    }
    if (!this.state.firstInput) {
      if (this.state.equalStored === null) {
        console.log("cannot print divide at start")
      } else if ((this.state.input[this.state.input.length - 1] === "*") |
        (this.state.input[this.state.input.length - 1] === "/") |
        (this.state.input[this.state.input.length - 1] === "+") |
        (this.state.input[this.state.input.length - 1] === "-") |
        (this.state.input[this.state.input.length - 1] === ".")
      ) {
        let poped = this.state.input;
        poped.pop();
        let operatorReplaced = poped.concat("/");
        this.setState((state) => ({
          firstInput: false, decimal: false, zero: false,
          input: operatorReplaced,
          output: operatorReplaced
        }));
        console.log("replaced for divide because only second operator is valid");
      }
    } else if (this.state.firstInput) {
      if (this.state.input[this.state.input.length - 1] === "-" && this.state.input[this.state.input.length - 2] === "(" && this.state.input[this.state.input.length - 3] === "-") {
        let poped = this.state.input;
        poped.pop();
        console.log("poped1>" + poped)
        poped.pop();
        console.log("poped2>" + poped)
        poped.pop();
        console.log("poped3>" + poped)
        let operatorReplaced = poped.concat("/");
        this.setState((state) => ({
          firstInput: false,
          decimal: false,
          zero: false,
          openBracket: false,
          input: operatorReplaced,
          output: ["+"]
        }));
        console.log("Replace double minus with a divide operator");
      } else if (
        (this.state.input[this.state.input.length - 1] === "*") |
        (this.state.input[this.state.input.length - 1] === "/") |
        (this.state.input[this.state.input.length - 1] === "+") |
        (this.state.input[this.state.input.length - 1] === "-") |
        (this.state.input[this.state.input.length - 1] === ".")
      ) {
        let poped = this.state.input;
        poped.pop();
        let operatorReplaced = poped.concat("/");
        this.setState((state) => ({
          firstInput: false, decimal: false, zero: false,
          input: operatorReplaced,
          output: operatorReplaced
        }));
        console.log("replaced for divide because only second operator is valid");
      } else if (this.state.openBracket) {
        let joinedBracket = this.state.input.concat(")");
        let joined = joinedBracket.concat("/")
        this.setState((state) => ({
          firstInput: false,
          decimal: false,
          zero: false,
          openBracket: false,
          input: joined,
          output: joined
        }));
        console.log("added divide operator and closed bracket")
      } else {
        let joined = this.state.input.concat("/");
        this.setState((state) => ({
          firstInput: false,
          decimal: false, zero: false,
          input: joined,
          output: joined
        }));
        console.log("default divide")
      }
    }
    //console.log("pressed: divide" + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedMultiply() {
    this.state.log.push("*")
    if (this.state.equalStored !== null) {
      console.log("multiply pressed after equal pressed")
      let joined = this.state.equalStored.concat("*");
      this.setState((state) => ({
        firstInput: false,
        input: joined,
        output: joined,
        equalStored: null
      }));
    }
    if (!this.state.firstInput) {
      if ((this.state.input[this.state.input.length - 1] === "*") |
        (this.state.input[this.state.input.length - 1] === "/") |
        (this.state.input[this.state.input.length - 1] === "+") |
        (this.state.input[this.state.input.length - 1] === "-") |
        (this.state.input[this.state.input.length - 1] === ".")
      ) {
        let poped = this.state.input;
        poped.pop();
        let operatorReplaced = poped.concat("*");
        this.setState((state) => ({
          firstInput: false, decimal: false, zero: false,
          input: operatorReplaced,
          output: operatorReplaced
        }));
        console.log("replaced for multiply because only second operator is valid");
      }
    } else if (this.state.firstInput) {
      if (this.state.input[this.state.input.length - 1] === "-" && this.state.input[this.state.input.length - 2] === "(" && this.state.input[this.state.input.length - 3] === "-") {
        let poped = this.state.input;
        poped.pop();
        console.log("poped1>" + poped)
        poped.pop();
        console.log("poped2>" + poped)
        poped.pop();
        console.log("poped3>" + poped)
        let operatorReplaced = poped.concat("*");
        this.setState((state) => ({
          firstInput: false,
          decimal: false,
          zero: false,
          openBracket: false,
          input: operatorReplaced,
          output: ["+"]
        }));
        console.log("Replace double minus with a multiply operator");
      } else if (
        (this.state.input[this.state.input.length - 1] === "*") |
        (this.state.input[this.state.input.length - 1] === "/") |
        (this.state.input[this.state.input.length - 1] === "+") |
        (this.state.input[this.state.input.length - 1] === "-") |
        (this.state.input[this.state.input.length - 1] === ".")
      ) {
        let poped = this.state.input;
        poped.pop();
        let operatorReplaced = poped.concat("*");
        this.setState((state) => ({
          firstInput: false, decimal: false, zero: false,
          input: operatorReplaced,
          output: operatorReplaced
        }));
        console.log("replaced for multiply because only second operator is valid");
      } else if (this.state.openBracket) {
        let joinedBracket = this.state.input.concat(")");
        let joined = joinedBracket.concat("*")
        this.setState((state) => ({
          firstInput: false,
          decimal: false,
          zero: false,
          openBracket: false,
          input: joined,
          output: joined
        }));
        console.log("added multiply operator and closed bracket")
      } else {
        let joined = this.state.input.concat("*");
        this.setState((state) => ({
          firstInput: false,
          decimal: false, zero: false,
          input: joined,
          output: joined
        }));
      }
    }
    //console.log("pressed: multiply" + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored)
  }
  pressedEqual() {
    this.state.log.push("=")
    if (this.state.initialState) {
      this.setState((state) => ({
        initialState: true,
        firstInput: false,
        decimal: false,
        zero: false,
      }));
    } else {
      if (this.state.equalStored !== null) {
        this.setState((state) => ({
          initialState: false,
          firstInput: false,
          decimal: false,
          zero: false,
          input: this.state.equalStored,
          output: this.state.equalStored,
        }));
      } else {
        function fixEnding(input) {
          if (input.length === 1) {
            if (input[0] === 0 | input[0] === "+" | input[0] === "-" | input[0] === "*" | input[0] === "/") {
              return [0]
            } else { return input[0] }
          } else if (
            input.length >= 1 &&
            (input[input.length - 1] === "*") |
            (input[input.length - 1] === "/") |
            (input[input.length - 1] === "+") |
            (input[input.length - 1] === "-") |
            (input[input.length - 1] === ".")
          ) {
            let poped = input;
            poped.pop();
            console.log("poping one operator: " + poped)
            if (
              poped.length >= 1 &&
              (poped[poped.length - 1] === "*") |
              (poped[poped.length - 1] === "/") |
              (poped[poped.length - 1] === "+") |
              (poped[poped.length - 1] === "-") |
              (poped[poped.length - 1] === ".")
            ) {
              let poped2 = poped
              poped2.pop()
              console.log("poping two operators: " + poped2)
              return poped2
            }
            return poped
          } else {
            return input
          }
        }
        let endingFixed = fixEnding(this.state.input)
        function bracketChecker(input, condition) {
          if (condition) {
            let joined = input.concat(")")
            return joined
          } else if (!condition) {
            return input
          }
        }
        let bracketChecked = bracketChecker(this.state.input, this.state.openBracket)
        let convertToString = bracketChecked.join("")
        //console.log("convertToString es: " + convertToString);
        let valueOfString = convertToString.valueOf();
        //console.log("valor es: " + valueOfString);
        let calculus = eval(valueOfString);
        this.setState((state) => ({
          initialState: false,
          firstInput: false,
          decimal: false,
          zero: false,
          //input: convertToString + "=" + calculus,
          input: convertToString,
          output: [calculus],
          equalStored: [calculus]
        }));
      }
    }
    //console.log("pressed: Equal" + ", initialInput: " + this.state.initialState + ", firstInput: " + this.state.firstInput + ", decimal: " + this.state.decimal + ", zero: " + this.state.zero + ", input: " + this.state.input + ", output: " + this.state.output + ", equal: " + this.state.equalStored + ", input length: " + this.state.input.length)
  }
  render() {
    function checkType(object) {
      if (typeof object === "string") {
        return object
      } else return object.join("")
    }
    let objectInput = checkType(this.state.input)
    let objectOutput = checkType(this.state.output)
    //console.log(this.state.log)
    //console.log("input: "+objectInput)
    //console.log("input type: "+typeof objectInput)
    //console.log("output: "+objectOutput)
    //console.log("output type: "+typeof objectOutput)


    return (
      <div id="bg">
        <div class="inner-container" id="calculator">
          <div class="pad-bank">
            <div class="screen">
              <div id="inputScreen">{objectInput}</div>
              <div id="display">{objectOutput}</div>
            </div>
            <div class="number">
              <button
                id="seven"
                onClick={this.pressedDigit7}
                style={{ background: "#6c757d" }}
              >
                7
              </button>
              <button
                id="eight"
                onClick={this.pressedDigit8}
                style={{ background: "#6c757d" }}
              >
                8
              </button>
              <button
                id="nine"
                onClick={this.pressedDigit9}
                style={{ background: "#6c757d" }}
              >
                9
              </button>
              <button
                id="four"
                onClick={this.pressedDigit4}
                style={{ background: "#6c757d" }}
              >
                4
              </button>
              <button
                id="five"
                onClick={this.pressedDigit5}
                style={{ background: "#6c757d" }}
              >
                5
              </button>
              <button
                id="six"
                onClick={this.pressedDigit6}
                style={{ background: "#6c757d" }}
              >
                6
              </button>
              <button
                id="one"
                onClick={this.pressedDigit1}
                style={{ background: "#6c757d" }}
              >
                1
              </button>
              <button
                id="two"
                onClick={this.pressedDigit2}
                style={{ background: "#6c757d" }}
              >
                2
              </button>
              <button
                id="three"
                onClick={this.pressedDigit3}
                style={{ background: "#6c757d" }}
              >
                3
              </button>
            </div>
            <div class="operator">
              <button
                id="add"
                onClick={this.pressedAdd}
                style={{ background: "#495057" }}
              >
                +
              </button>
            </div>
            <div class="clear">
              <button
                id="clear"
                onClick={this.pressedClear}
                style={{ background: "#ee6c4d" }}
              >
                AC
              </button>
              <button
                id="divide"
                onClick={this.pressedDivide}
                style={{ background: "#495057" }}
              >
                /
              </button>
            </div>

            <div class="operator2">
              <button
                id="multiply"
                onClick={this.pressedMultiply}
                style={{ background: "#495057" }}
              >
                x
              </button>
              <button
                id="subtract"
                onClick={this.pressedSubtract}
                style={{ background: "#495057" }}
              >
                -
              </button>
            </div>
            <div class="zeroToHero">
              <button
                id="zero"
                onClick={this.pressedDigit0}
                style={{ background: "#6c757d" }}
              >
                0
              </button>
            </div>
            <div class="decimal">
              <button
                id="decimal"
                onClick={this.pressedDecimal}
                style={{ background: "#6c757d" }}
              >
                .
              </button>
            </div>
            <div class="equal">
              <button
                id="equals"
                onClick={this.pressedEqual}
                style={{ background: "#495057" }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
