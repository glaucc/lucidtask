
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import MyEditor from './components/MyEditor'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <>
      <h1 style={{marginBottom: '2rem', color: 'white'}}>Try writing 'name' since the api is mock</h1>
      <MyEditor />

    </>
    </QueryClientProvider>
  )
}

export default App
