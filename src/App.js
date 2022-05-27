import './App.css';
import Header from './components/header/header';
import ProductCard from './components/productCard/productCard';

function App({client}) {
  return (
    <>
    <Header client={client}/>
    <ProductCard/>
    </>
  );
}

export default App;
