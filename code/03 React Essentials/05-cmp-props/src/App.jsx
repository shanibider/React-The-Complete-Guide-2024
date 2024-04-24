import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
    {/* Setting HTML attributes dynamically */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}



// Making Components Reusable with Props -

/* 2. Merge into Object.
React merges all props into a single object.
{
   title= 'Components'
   description= 'The core UI...'
}
*/


// 3. Receive Props as an argument.
// Props are passed to the component function as the first argument by React.
// This object has this custom <key, value> pairs: { title: '...', description: '...', image: '...' }
// Thanks to props this component is reusable
function CoreConcept(props) {
  return (
    <li>
      {/* Can access props.image to get hold of the value that's set on the image key below */}
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* Rendering the Header component (can be reused) */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {/* 1. Set props (can be: String, Number, Object, Array).
          Props are passed as an object, and are "custom HTML attributes" set on component. */}
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
