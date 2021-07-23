import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import Output from './components/Output';
import './App.css';

const App = () => {
  const [paragraphs,setParagraphs] = useState([]);
  const [tag,setTag] = useState("p");
  const [inputValue,setInputValue] = useState(1);
  const [includeHtml,setIncludeHtml] = useState("Yes");


  useEffect(()=>{
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`
    fetch(url)
      .then(res => res.json())
      .then(data => setParagraphs(data));
  },[inputValue]);




  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Lorem Ispum Text Generator</h1>
        </div>
        <Options
          paragraphs={paragraphs}
          tag={tag}
          setTag={setTag}
          inputValue={inputValue}
          includeHtml={includeHtml}
          setInputValue={setInputValue}
          setIncludeHtml={setIncludeHtml}
        />

        <Output paragraphs={paragraphs} tag={tag} includeHtml={includeHtml} />


      </div>
      
    </div>
  );
}

export default App;
