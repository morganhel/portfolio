import  { useState, useEffect } from 'react';

function Typewriter({text,speed}){
    const useTypewriter = (text, speed = 50) => {
        const [displayText, setDisplayText] = useState('');
      
        useEffect(() => {
          let i = 0;
          const typingInterval = setInterval(() => {
            if (i < text.length) {
              setDisplayText(prevText => prevText + text.charAt(i));
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, speed);
      
          return () => {
            clearInterval(typingInterval);
          };
        }, [text, speed]);
      
        return displayText;
      };

    const displayText = useTypewriter(text, speed);

    return (
        <div>
            {displayText.split('\n').map((line,index) =>
            <p key={index}>{line}</p>)}
        </div>
    )
    // return <p>{displayText}</p>;
};

export default Typewriter;