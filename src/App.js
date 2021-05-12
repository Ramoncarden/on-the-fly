import './tailwind.output.css';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './components/Title';
import CardContent from './components/CardContent';
import SecondaryTitle from './components/SecondaryTitle';
import Footer from './components/Footer';
import Form from './components/auth/Form';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen">
        <Navbar />
        <Route exact path="/">
          <Title />
          <SecondaryTitle />
          <CardContent />
        </Route>
        <Route path="/signup">
          <Form />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;

// Example pattern for tailwind component

// const classes = {
//   wrapper: 'border-2 m-16 p-16',
//   title: 'text-gray-800 text-xl text-center font-bold',
// };

// const BasicComponent = () => {
//   return (
//     <div className={classes.wrapper}>
//       <h1 className={classes.title}>Basic Component</h1>
//     </div>
//   );
// };
