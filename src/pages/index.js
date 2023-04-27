// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/mbti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await response.json();
      setResult(data.mbti);
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error(error);
    }
@@ -41,19 +42,13 @@ export default function Home() {
      </form>
      {result && (
        <div className="flex flex-col items-center mt-8">
          <p className="text-4xl font-bold">{result}</p>
          <p className="text-4xl font-bold">{result.mbti}</p>
          <div className="flex space-x-2 mt-2">
            <span role="img" aria-label="heart" className="text-2xl">
              ❤️
            </span>
            <span role="img" aria-label="sparkles" className="text-2xl">
              ✨
            </span>
            <span role="img" aria-label="unicorn" className="text-2xl">
              🦄
              {result.emoji}
            </span>
          </div>
          <p className="text-lg font-medium mt-4">오늘의 운세: 어쩌구 저쩌구...</p>
          <p className="text-lg font-medium mt-4">오늘의 운세: {result.fortune}</p>
        </div>
      )}
    </div>
  );
}