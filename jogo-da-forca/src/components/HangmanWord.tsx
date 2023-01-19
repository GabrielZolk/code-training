import styled from "styled-components"

const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    gap: 2rem;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: monospace;
`

export default function HangmanWord() {
    const word = 'teste'
    const guessedLetters = ['s']
    return (
        <Wrapper>{word.split("").map((letter, index) => (
            <span
                style={{
                    borderBottom: '0.1em solid white',
                    height: '40px'
                }} key={index}
            >
              <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>  
             
            </span>
        ))}</Wrapper>
    )
}
