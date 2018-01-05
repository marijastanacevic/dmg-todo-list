class InputContainer extends React.Component {
	render(){
		return (
			<form className='input-form'>
				<input type='text' />
				<input type='button' value='Submit' />
			</form>
		)
	}
}


class InputMessages extends React.Component {
	render(){
		return (
			<div className='messages'></div>
		)
	}
}




class App extends React.Component {
	render(){
		return(
			<div className='container'>
				<InputContainer />
				<InputMessages />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'))


