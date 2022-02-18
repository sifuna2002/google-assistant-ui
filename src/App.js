import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.css';
import Date from './components/Date'
import Snapshot from './components/Snapshot';
import Header from './components/Header'
function App() {
    return (
      <>
      <CssBaseline />
      <Container style={{backgroundColor:'whitesmoke'}} >
        <Header />
        <Snapshot />
        <Date />
      </Container>
      </>
    );
}

export default App;