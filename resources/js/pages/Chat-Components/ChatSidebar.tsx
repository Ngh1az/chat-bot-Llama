import { MODELS } from '@/Model'

export default function ChatSidebar({ setModel, model, temperature, setTemperature, clearAll }) {
  return (
      <>
          <aside className="card sidebar">
              <div>
                  <h3 className="h">Models</h3>
                  <p className="small">Please choose a model</p>
                  <div className="models">
                      {MODELS.map((m) => (
                          <button key={m.id} onClick={() => setModel(m.id)} className={`model ${model === m.id ? 'active' : ''}`}>
                              <span className="badge">{m.label}</span>
                          </button>
                      ))}
                  </div>
              </div>
              <hr className="sep" />
              <div className="row">
                  <div className="small">Temperature</div>
                  <input
                      className="slider"
                      type="range"
                      min={'0'}
                      max={'1'}
                      step={'0.1'}
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  />
                  <div className="small">{temperature.toFixed(1)}</div>
              </div>
              <hr className="sep" />
              <div className="row">
                  <button className="btn" onClick={clearAll}>
                      New Chat
                  </button>
              </div>
          </aside>
      </>
  );
}