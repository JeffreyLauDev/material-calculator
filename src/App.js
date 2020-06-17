import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CButton from './components/CButton';



var countDecimals = function (value) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 2.3,
      num2: 0.3,
      sign: "-",
      laststep: null,
      show: 0.3
    };
  }
  showScreen = () => {
    var { num2 } = this.state;
    this.setState({
      show: num2 == null ? this.state.total : num2,
    })
  }

  clickButton = value => {
    // this.calculate(value);
    var { total, num2, sign } = this.state;
    total = Number(total);
    var selectedValue = sign === null ? "total" : "num2";

    //INPUT IS AC
    if (value === "AC") {
      this.setState({
        total: 0,
        num2: null,
        sign: null,
        laststep: null,
        show: 0
      }, () => this.showScreen());
    }
    //INPUT IS NUMBER
    if (!isNaN(Number(value))) {

      //SELECTED VALUE IS CLEAR
      if (this.state[selectedValue] === 0 || this.state[selectedValue] === null) {
        this.setState({
          [selectedValue]: Number(value),
        }, () => this.showScreen());
      }

      //SELECTED VALUE HAS VALUE
      else {
        var selectedValueSign = Math.sign(this.state[selectedValue]) === -1 ? -1 : 1;
        //DECIMAL NUMBER
        if (!this.state[selectedValue].toString().includes(".")) {
          this.setState({
            [selectedValue]: this.state[selectedValue] * 10 + Number(value) * selectedValueSign,
          }, () => this.showScreen());
        }
        //FLOAT NUMBER
        else {
          if (Number(this.state[selectedValue]) * 10 % 10 === 0) {
            this.setState({
              [selectedValue]: Number(this.state[selectedValue]) + Number(value) * selectedValueSign * 1 / Math.pow(10, countDecimals(this.state[selectedValue])),
            }, () => this.showScreen());
          }
          else {
            this.setState({
              [selectedValue]: (Number(value) * selectedValueSign * 1 / Math.pow(10, countDecimals(this.state[selectedValue]) + 1) + Number(this.state[selectedValue])).toFixed(countDecimals(this.state[selectedValue]) + 1),
            }, () => this.showScreen());
          }

        }

      }

    }
    //INPUT IS SIGN
    else if (['+', '-', '×', '÷', '='].includes(value)) {

      //IF NUMBER 2 HAS NO VALUE, ASSIGN, ELSE CALCULATE & SHOW
      if (num2 == null) {
        this.setState({
          sign: value,

        })
      }
      else {
        switch (sign) {
          case '+':
            console.log("hi");
            this.setState({ total: total + num2, sign: value, num2: null }, () => this.showScreen());
            break;
          case '-':
            this.setState({ total: total - num2, sign: value, num2: null }, () => this.showScreen());
            break;
          case '×':
            this.setState({ total: total * num2, sign: value, num2: null }, () => this.showScreen());
            break;
          case '÷':
            if (num2 === 0) {
              this.setState({ total: "Can't divide by zero", sign: value, num2: null }, () => this.showScreen());
            }
            else {
              this.setState({ total: total / num2, sign: value, num2: null }, () => this.showScreen());
            }
            break;
          case '=':

            this.setState({ total: total, sign: null, num2: null }, () => this.showScreen());
            break;
          case 'AC':

            break;
          default:
        }
        if (value === "=") {
          this.setState({ sign: null });
        }
      }
    }

    // INPUT IS PRESET FUNCTION
    else {
      switch (value) {
        case '+/-':
          this.setState({ [selectedValue]: this.state[selectedValue] * -1 }, () => this.showScreen());
          break;
        case '%':
          this.setState({ [selectedValue]: this.state[selectedValue] * 0.01 }, () => this.showScreen());
          break;
        case '.':
          this.setState({ [selectedValue]: (this.state[selectedValue] * 1.0).toFixed(1) }, () => this.showScreen());
          break;

        default:
      }
      if (selectedValue === "total") {
        this.setState({ sign: null, num2: null });
      }

    }







  }

  render() {
    var { show } = this.state;
    return (
      <div className="App">
        <Container fixed>
          <Typography variant="h3" gutterBottom style={{ textAlign: "right" }}>
            {show}
          </Typography>
          <Grid container spacing={3}>
            <CButton click={this.clickButton} color="grey" value="AC" />
            <CButton click={this.clickButton} color="grey" value="+/-" />
            <CButton click={this.clickButton} color="grey" value="%" disabled />
            <CButton click={this.clickButton} color="orange" value="÷" />
            <CButton click={this.clickButton} color="dark" value="7" />
            <CButton click={this.clickButton} color="dark" value="8" />
            <CButton click={this.clickButton} color="dark" value="9" />
            <CButton click={this.clickButton} color="orange" value="×" />
            <CButton click={this.clickButton} color="dark" value="4" />
            <CButton click={this.clickButton} color="dark" value="5" />
            <CButton click={this.clickButton} color="dark" value="6" />
            <CButton click={this.clickButton} color="orange" value="-" />
            <CButton click={this.clickButton} color="dark" value="1" />
            <CButton click={this.clickButton} color="dark" value="2" />
            <CButton click={this.clickButton} color="dark" value="3" />
            <CButton click={this.clickButton} color="orange" value="+" />
            <CButton click={this.clickButton} color="dark" value="0" size="2" />
            <CButton click={this.clickButton} color="dark" value="." />
            <CButton click={this.clickButton} color="orange" value="=" />
          </Grid>


        </Container>
      </div>

    );
  }
}


export default App;
