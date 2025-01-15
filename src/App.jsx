import reactImg from './assets/react-core-concepts.png'; 
import { CORE_CONCEPTS } from './data.js';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'] ;

function genRandomInt (max) {
  return Math.floor(Math.random() * (max + 1));
  
}


function MyHeader () {

  const description =reactDescriptions[genRandomInt(2)] ;
return (
    <header>
        <img src= {reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!build!build!
        </p>
    </header>
);
}



function CoreConcept({image,title,description}) {
  return (
  <li>
  <img src={image} alt={title}></img>
  <h3>{title}</h3>
  <p>{description}</p>
  </li>
  );

}

function App() {
  return (
    <div>
      <MyHeader>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </MyHeader>
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
      </main>
    </div>
  );
}

export default App;
