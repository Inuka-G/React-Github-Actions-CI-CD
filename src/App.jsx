import MainContent from './components/MainContent';


function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Header</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
