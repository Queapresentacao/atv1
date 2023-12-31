import { useState } from "react";

function FormQuiz() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
    return (
        <>
            <div className="atividades">
                <h1 className="atv"> FormQuiz </h1>
                <h2>quiz!</h2>
                <p>Quais são os 11 primeiros digitos de PI? </p>
                <form onSubmit={handleSubmit}>
                    <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'}></textarea><br />
                    <button disabled={answer.length === 0 || status == 'submitting'}>Submit</button>
                    {error !== null && <p className="Error">{error.message}</p>}
                </form>
            </div>
        </>
    )
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
            reject(new Error('Try again'))
        } else {
            resolve()
        }
    }, 1500)
}

export default FormQuiz;