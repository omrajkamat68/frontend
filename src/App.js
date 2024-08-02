import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [sections, setSections] = useState({
    numbers: true,
    alphabets: true,
    highestAlphabet: true,
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://backend-url/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: JSON.parse(input) }),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>ABCD123</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"data": ["A", "B", "1"]}'
      />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          {sections.numbers && <div>Numbers: {response.numbers.join(', ')}</div>}
          {sections.alphabets && <div>Alphabets: {response.alphabets.join(', ')}</div>}
          {sections.highestAlphabet && <div>Highest Alphabet: {response.highest_alphabet.join(', ')}</div>}
        </div>
      )}
    </div>
  );
}

export default App;
