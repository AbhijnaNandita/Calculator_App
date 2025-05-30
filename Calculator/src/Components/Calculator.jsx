import React, { useState } from 'react'

const Calculator = () => {

  const [data, setData] = useState(" ");

  const getValue = (event) => {
      setData(data.concat(event.target.value));
  }

  const calculation = () => {
    setData(eval(data));
  }

  return (
    <>
      <div className='container'>
        <input placeholder='0' value={data}/>
      

      <button onClick={getValue} value='('>(</button>
      <button onClick={getValue} value=')'>)</button>
      <button onClick={getValue} value='%'>%</button>
      <button valu='AC'>AC</button>

      <button onClick={getValue} value='7'>7</button>
      <button onClick={getValue} value='8'>8</button>
      <button onClick={getValue} value='9'>9</button>
      <button onClick={getValue} value='*'>*</button>

      <button onClick={getValue} value='4'>4</button>
      <button onClick={getValue} value='5'>5</button>
      <button onClick={getValue} value='6'>6</button>
      <button onClick={getValue} value='-'>-</button>

      <button onClick={getValue} value='1'>1</button>
      <button onClick={getValue} value='2'>2</button>
      <button onClick={getValue} value='3'>3</button>
      <button onClick={getValue} value='+'>+</button>

      <button onClick={getValue} value='0'>0</button>
      <button onClick={getValue} value='BACK'>BACK</button>
      <button onClick={calculation} value='='>=</button>
      <button onClick={getValue} value='/'>/</button>

      </div>

    </>
  );
}

export default Calculator