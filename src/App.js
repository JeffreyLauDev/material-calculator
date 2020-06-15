import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CButton from './components/CButton';
import { symbol } from 'prop-types';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      sign: null,
      laststep: null
    };
  }
  clickButton = value => {
    var { laststep, total, sign } = this.state;
    if (!isNaN(Number(value))) {
      //is number 
      if (laststep == "number") {
        total = total * 10 + Number(value);
        this.setState({
          total: total,

        })
      }
      else if (laststep == "sign") {
        switch (sign) {
          case '+':
            this.setState({ total: total + Number(value) })
            break;
          case '-':
            this.setState({ total: total - Number(value) })
            break;
          case '×':
            this.setState({ total: total * Number(value) })
            break;
          case '÷':
            this.setState({ total: total / Number(value) })
            break;
          default:
          // code block
        }

      }
      this.setState({
        laststep: "number"
      })

    }
    else {

      if (laststep == "number") {
        switch (value) {
          case '+':
            console.log("+");
            this.setState({ sign: "+" })
            // code block
            break;
          case '-':
            // code block
            break;
          case '×':
            // code block
            break;
          case '÷':
            // code block
            break;
          default:
          // code block
        }
        this.setState({ laststep: "sign" })
      }


    }

  }

  render() {
    var { total } = this.state;
    return (
      <div className="App">
        <Container fixed>
          <Typography variant="h3" gutterBottom>
            {total}
          </Typography>
          <Grid container spacing={3}>
            <CButton click={this.clickButton} color="grey" click={this.clickButton}>AC</CButton>
            <CButton click={this.clickButton} color="grey" >+/-</CButton>
            <CButton click={this.clickButton} color="grey" >%</CButton>
            <CButton click={this.clickButton} color="orange" >÷</CButton>
            <CButton click={this.clickButton} color="dark" >7</CButton>
            <CButton click={this.clickButton} color="dark" >8</CButton>
            <CButton click={this.clickButton} color="dark" >9</CButton>
            <CButton click={this.clickButton} color="orange" >×</CButton>
            <CButton click={this.clickButton} color="dark" >4</CButton>
            <CButton click={this.clickButton} color="dark" >5</CButton>
            <CButton click={this.clickButton} color="dark" >6</CButton>
            <CButton click={this.clickButton} color="orange" >-</CButton>
            <CButton click={this.clickButton} color="dark" >1</CButton>
            <CButton click={this.clickButton} color="dark" >2</CButton>
            <CButton click={this.clickButton} color="dark" >3</CButton>
            <CButton click={this.clickButton} color="orange" >+</CButton>
            <CButton size="2" click={this.clickButton} color="dark">0</CButton>
            <CButton click={this.clickButton} color="dark" >.</CButton>
            <CButton click={this.clickButton} color="orange" >=</CButton>
          </Grid>

        </Container>
      </div>

    );
  }
}


export default App;
