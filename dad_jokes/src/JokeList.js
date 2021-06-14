import React, { Component } from 'react'
import axios from 'axios'


class JokeList extends Component {
  componentDidMount(){
    axios.get('https://icanhazdadjoke.com/')
  }
  render(){
    return (
    <div>
      <h1>Dad Jokes</h1>
    </div>
    )
  }
}

export default JokeList
