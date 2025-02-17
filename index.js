function getHistory() {
      return document.getElementById("history-value").innerText;
}

function printHistory(num) {
      document.getElementById("history-value").innerText = num;
}

function getOutput() {
      return document.getElementById("output-value").innerText;
}

function printOutput(num) {
      if (num == "") {
            document.getElementById("output-value").innerText = num;
      } else {

            document.getElementById("output-value").innerText = getFormattedNumber(num);
      }
}

// printOutput("850947340934")

function getFormattedNumber(num) {
      if (num == "-") {
            return "";
      }
      let n = Number(num);
      let value = n.toLocaleString("en");
      return value;
}

function reverseNumberFormat(num) {
      return Number(num.replace(/,/g, ""));
}

console.log(reverseNumberFormat(getOutput()));

// operations

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
      operator[i].addEventListener("click", function () {
            console.log("The operator clicked:" + this.id);

            if (this.id == "clear") {
                  printHistory("");
                  printOutput("");
            } else if (this.id == "backspace") {
                  let output = reverseNumberFormat(getOutput()).toString();
                  if (output) {
                        output = output.substring(0, output.length - 1);
                        printOutput(output);
                  }
            } else {
                  let output = getOutput();
                  let history = getHistory();

                  if (output == "" && history != "") {
                        if (isNaN(history[history.length - 1])) {
                              history = history.substring(0, history.length - 1);
                        }
                  }
                  if (output != "" || history != "") {
                        output = output == "" ? output : reverseNumberFormat(output);
                        history = history + output;

                        if (this.id == "=") {
                              let result = eval(history);
                              printOutput(result);
                              printHistory("");
                        } else {
                              history = history + this.id;
                              printHistory(history);
                              printOutput("");
                        }
                  }
            }
      });
}

// numbers
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
      number[i].addEventListener("click", function () {
            console.log("The number clicked:" + this.id);
            let output = reverseNumberFormat(getOutput());

            if (output != NaN) { // if output is a number
                  output = output + this.id;
                  printOutput(output);
            }
      })
}
