import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [nayoks,setNayoks] = useState([])
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => setNayoks(data))
	},[])
  return (
	<div className="App">
		<header className="App-header">
			{
				nayoks.map(item => <Nayoks name={item.name} uniqueKey={item.id}></Nayoks>)
			}
		</header>
	</div>
  );
}
function Nayoks(props){
	// console.log(props);
	const nayoksStyle = {
		border:'2px solid white',
		margin:'20px',
		borderRadius: '7px'
	}
	return (
		<div style={nayoksStyle}>
			<h4>Your id - <span style={{color:'cyan'}}>{props.uniqueKey}</span></h4>
			<h1>Ami Nayok - <span style={{color:'yellow'}}>{props.name || 'Naim'}</span></h1>
			<h3>I have done 5 movies in {props.age || 20} years</h3>
		</div>
	)	
}
export default App;
