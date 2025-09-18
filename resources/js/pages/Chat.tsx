//ts-nocheck
import React from 'react'
import ChatSidebar from './Chat-Components/ChatSidebar'
import { useChat } from './Chat-Components/hooks/useChat'
import ChatMessage from './Chat-Components/ChatMessage';
import ChatinputBar from './Chat-Components/ChatinputBar';

export default function Chat() {
  const{  
      model, setModel, 
      temperature, setTemperature,
      input, setInput,
      history,
      boxRef, clearAll, send
      }
          = useChat()
  return <div className="container">
      <ChatSidebar 
          setModel={setModel} 
          model={model} 
          temperature={temperature} 
          setTemperature={setTemperature} 
          clearAll={clearAll}
      />
      <main className="main">
          <div className="card chat">
              <ChatMessage boxRef={boxRef} history={history}/>
              <ChatinputBar send={send} input={input} setInput={setInput}/>
          </div>
      </main>

  </div>;
}