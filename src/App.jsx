
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import MyEditor from './components/MyEditor'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <>
      <MyEditor />
    </>
    </QueryClientProvider>
  )
}

export default App
