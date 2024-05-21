import MainPage from "./Container/MainPage"
import store from "./Redux/index.js"
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <MainPage />
    </Provider>
    </>
  )
}

export default App
