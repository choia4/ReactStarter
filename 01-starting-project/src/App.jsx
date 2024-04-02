import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';

//react hook needed to use state and invoke functions more than once
import {useState} from 'react';

function App() {
  //first element is the current data snapshot of execution cycle
  //second element is updated value of execution cycle
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>
        {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    );
  }

  function handleSelect(selectedButton) {
    //selected Button => 'components', 'jsx', ...
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          {/* code below demonstrates what map does */}
        {/* <CoreConcept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_COnCEPTS[0].image} 
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>  
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect = {() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect = {() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect = {() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect = {() => handleSelect('state')}>State</TabButton>
          </menu>
        {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;