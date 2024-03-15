import BankDetails from './components/BankDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="">
      <Header className="" />
      <div className='flex flex-row'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <div className=''>
          <BankDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
