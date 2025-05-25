import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>Rijen Kayastha</h1>
      <h2>Student Portfolio</h2>

      <section>
        <h3>About Me</h3>
        <p>
          Hello! I'm Rijen Kayastha, a student with some experience in Java and C programming.
          I'm very passionate about learning new programming languages and improving my skills.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Hobbies</h3>
        <ul>
          <li>Playing guitar professionally</li>
          <li>Singing with friends</li>
          <li>Exploring new coding languages</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Skills</h3>
        <ul>
          <li>Java (Basic)</li>
          <li>C Programming (Basic)</li>
        </ul>
      </section>

      <footer style={{ marginTop: '40px', fontStyle: 'italic' }}>
        <p>Thanks for visiting my portfolio!</p>
      </footer>
    </div>
  );
}
export default App;
