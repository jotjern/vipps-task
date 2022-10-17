import './App.css';
import QueryField from './QueryField';
import ClipLoader from "react-spinners/ClipLoader";
import React, { useEffect } from 'react';
import ButtonToggle from './ButtonToggle';
import InfoCard from './InfoCard';
import DebugPanel from './DebugPanel';

const api_host = "https://vipps.jotjern.no/api/";

type State = {
  loading?: boolean,
  ref_count?: Number;
  error?: String;
  topic?: String;
  debug_info?: String;
}

function App() {
  let [state, setState] = React.useState<State>({});
  let [parse, setParse] = React.useState(false);

  return (<>
    <header>
      <h1>Wikipedia API application</h1>
    </header>
    <main>
      <ButtonToggle on_text="Parse on" off_text="Parse off" onChange={new_parse => setParse(new_parse)}/>
      <h1>Search for a topic:</h1>
      <QueryField text="Search" onSubmit={(topic: string) => {
        setState({loading: true});
        fetch(`${api_host}count_title_references?topic=${topic}&parse=${parse}&debug=true`)
          .then(response => response.json())
          .catch(err => {
            setState({error: err});
            console.log(err);
          })
          .then(data => {
            if (data["error"]) {
              setState({error: data["error"]});
              console.log(data["error"]);
            } else {
              console.log(data);
              setState({ref_count: data["count"], topic, debug_info: data["text"]});
            }
          }) 
      }} />

      { state.loading && <ClipLoader /> }
      { state.ref_count !== undefined && <h2>Number of references to {state.topic || ""}: {state.ref_count?.toString()}</h2> }
      { state.error && <h2>{state.error}</h2> }

      <DebugPanel debug_info={state.debug_info || ""} />
    </main>
  </>);
}

export default App;
