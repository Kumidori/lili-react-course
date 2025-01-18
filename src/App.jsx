
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSlect() {
    console.log('Hello - selected');
}



  return (
    <div>
      <Header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </Header>
     <main>
      <section id='core-concepts'>
        <h2>Core concepts</h2>
        <ul>
          <CoreConcept 
          title = {CORE_CONCEPTS [0].title}
          description= {CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
           title = {CORE_CONCEPTS [1].title}
           description= {CORE_CONCEPTS[1].description}
           image={CORE_CONCEPTS[1].image}
           />
          <CoreConcept
          title = {CORE_CONCEPTS [2].title}
          description= {CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept
         title = {CORE_CONCEPTS [3].title}
         description= {CORE_CONCEPTS[3].description}
         image={CORE_CONCEPTS[3].image}
         /> 
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSlect}>Components</TabButton>
            <TabButton onSelect={handleSlect}>JSX</TabButton>
            <TabButton nSelect={handleSlect}>props</TabButton>
            <TabButton onSelect={handleSlect}>State</TabButton>

          </menu>
           dynamic content


          </section>
      </main>
    </div>
  );
}

export default App;
