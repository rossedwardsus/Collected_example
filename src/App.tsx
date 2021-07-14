import React, {useState, useEffect} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import Grid, {GridSpacing} from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { calculateAction } from './actions/calculate';

import Input1 from './Input1';
import Input2 from './Input2';
import SumValueComponent from './SumValueComponent';
import SumButtonComponent from './SumButtonComponent';
import ClearButtonComponent from './ClearButtonComponent';

function App() {

  const [input1Value, setInput1Value] = useState<any>();
  const [input2Value, setInput2Value] = useState<any>();
  const [calculateValue, setCalculateValue] = useState<any>();

  const reduxSum: any = useSelector((calculate: any) => calculate.calculate.sum); 

  const dispatch = useDispatch();

  useEffect(() => {

    setCalculateValue(reduxSum);

  }, [reduxSum])


  const onInput1ValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    console.log(e);

    if(e.target.value !== ""){

        setInput1Value(parseInt(e.target.value));

    }else{

        setInput2Value(e.target.value);

    }

  } 

  const onInput2ValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    console.log(e);

    if(e.target.value !== ""){

        setInput2Value(parseInt(e.target.value));

    }else{

        setInput2Value(e.target.value);

    }

  } 

  const sumValues = () => {

    dispatch(calculateAction(input1Value, input2Value));

  }

  const clearSum = () => {

    setInput1Value(0);
    setInput2Value(0);
    setCalculateValue(0);

  }

  return (
    <div className="App">
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={2} lg={2}>
          <Grid item xs={2} lg={2}>
            <Input1 value={input1Value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput1ValueChange(e)}/>
            <br/>
            {input1Value}
          </Grid>
          <Grid item xs={2} lg={2}>
            <Input2 value={input2Value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput2ValueChange(e)}/>
            <br/>
            {input2Value}
          </Grid>
          <Grid item xs={2} lg={2}>
            =
          </Grid>
          <Grid item xs={2} lg={2}>
            <SumValueComponent value={calculateValue}/>
          </Grid>
          <Grid item xs={2} lg={2}>
            <SumButtonComponent onClick={() => sumValues()}>Sum</SumButtonComponent><ClearButtonComponent onClick={() => clearSum()}>Clear</ClearButtonComponent>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
