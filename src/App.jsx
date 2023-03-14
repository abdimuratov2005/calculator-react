import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './sass/style.module.scss'

// ==========================================================//

const App = () => {
    const [result, setResult] = useState('');
    const numbers = [];
    const operations = [];

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        .forEach(num => {
            numbers.push(
                <Button type="button" onClick={e => {
                    setResult(result + e.target.value)
                }} value={num} key={num}
                >
                    {num}
                </Button>
            )
        });

    ['+', '-', '*', '/']
        .forEach(oper => {
            operations.push(
                <Button type="button" onClick={e => {
                    setResult(result + e.target.value)
                }} value={oper} key={oper}
                >
                    {oper}
                </Button>
            )
        });

    const reset = () => {
        setResult('')
    }
    const allResult = () => {
        try {
            setResult(
                String(eval(result).lenght > 3 &&
                    String(eval(result)).includes('.')
                    ? String(eval(result).toFixed(4))
                    : String(eval(result))),
                setResult(result.toString())
            )
        } catch (error) {
            alert(error)
        }
    }

// ==========================================================//

    return (
        <div className={styles.app}>
            <div className={styles.calculator}>
                <div>
                    <Form.Control
                        className={styles.result}
                        type='text'
                        placeholder="0"
                        value={result}
                        onChange={event => setResult(event.target.value)}
                    />
                </div>
                <div className={styles.btns}>
                    {numbers}
                    {operations}
                    <Button onClick={reset}>R</Button>
                    <Button className={styles.allresult} value='=' onClick={allResult}>=</Button>
                </div>
            </div>
        </div>
    )
}

// ==========================================================//

export default App;