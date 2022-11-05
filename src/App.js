import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css'

function App() {
  return (
    <div className="App">
      <Header title='Groceries' />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
