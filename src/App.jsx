import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [result, setResult] = useState('');
    const numbers = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        .forEach(num => {
            numbers.push(
                <Button variant="primary" type="submit" onClick={e => {
                    setResult(result + e.target.value)
                }} value={num} key={num} 
                >
                    { num }
                </Button>
            )
        });
    const reset = () => {
        setResult('')
    }
    return (
        <div id="app">
            <div className="app__body calculator">
                <div className="calculator__model">
                    <Form.Control
                        className='result'
                        type='text'
                        placeholder="0"
                        value={result}
                        onChange={event => setResult(event.target.value)}
                    />
                </div>
                <div className='calculator__btns'>
                    { numbers }
                    <Button onClick={reset}>R</Button>
                    <Button value='+' onClick={e => setResult(result + e.target.value)}>+</Button>
                    <Button value='-' onClick={e => setResult(result + e.target.value)}>-</Button>
                    <Button value='*' onClick={e => setResult(result + e.target.value)}>*</Button>
                    <Button value='/' onClick={e => setResult(result + e.target.value)}>/</Button>
                    <Button value='=' onClick={e => {
                        try {
                            setResult(
                                String(eval(result).lenght > 3 &&
                                String(eval(result)).includes('.')
                                ? String(eval(result).toFixed(4))
                                : String(eval(result))),
                                setResult(result.toString())
                            )
                        } catch (error){
                            alert(error)
                        }
                    }}>=</Button>
                </div>
            </div>
        </div>
    )
}

export default App;