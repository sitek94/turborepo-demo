import {createRoot} from 'react-dom/client'
import './style.css'
import {Counter} from '@repo/ui/counter'
import {api} from '@repo/api'

const App = () => (
  <div>
    <h1>Hello World, {api()}</h1>
    <div className="card">
      <Counter />
    </div>
  </div>
)

createRoot(document.getElementById('app')!).render(<App />)
