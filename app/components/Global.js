import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';
import { jsonManip } from '../js/jsonManip.js';

const JSONData = require('../json/data.json')

//console.log(JSON.parse(JSONData))

//IMPORT THE JSON
//const jsonData = require('../json/data.json');
//const dataVar = json_manip.parseJSON(require('../json/data.json'));
//console.log(dataVar);

const dataVar = jsonManip(JSONData)



class Global extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			items: dataVar
		}
	} // end constructor

	render() {
		return (
			<div className="Global">
				<Gallery items={ this.state.items }/>
			</div>
		)
	}
}

export default Global;