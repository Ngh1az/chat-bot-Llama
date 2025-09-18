import React from 'react'
import { parseThink } from './utils/parseThink';

export default function ChatMessage({ boxRef, history }) {
  return (
      <div className="messages" ref={boxRef}>
          {history.length === 0 && <div className="small">Start chatting - please choose a model on the left sidebar.</div>}
          {history.map((m, i) => {
              const isA = m.role === 'assistant';
              const { think, clean } = parseThink(m.content);

              return (
                  <div key={i} className={`msg ${isA ? 'assistant' : 'user'}`}>
                      <div>{clean}</div>
                      {think && <div className="think">{think}</div>}
                  </div>
              );
          })}
      </div>
  );
}