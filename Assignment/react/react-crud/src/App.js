import './App.css';
import Create from './components/create';
import UpdatePatient from './components/updatePatient';
import Read from './components/read';
import UpdateClinicRecord from './components/updateClinicRecord';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">TOOTHFIXERS LTD.</h2>
      <div>
        <Create  />
        <Read />
     
      </div>
    </div>
  );
}

export default App;