import React from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.numJokesToGet = this.props.numJokesToGet || 10
    this.getJokes = this.getJokes.bind(this);
    this.generateNewJokes = this.generateNewJokes.bind(this);
    this.vote = this.vote.bind(this);
  };

  /* get jokes if there are no jokes */

  async getJokes() {
    let { jokes } = this.state;
    // const { numJokesToGet } = this.props;
    let j = [...jokes];
    let seenJokes = new Set();
    try {
      while (j.length < this.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { status, ...jokeObj } = res.data;

        if (!seenJokes.has(jokeObj.id)) {
          seenJokes.add(jokeObj.id);
          j.push({ ...jokeObj, votes: 0 });
        } else {
          console.error("duplicate found!");
        }
      }
      this.setState({jokes: j});
    } catch (e) {
      console.log(e);
    }

    if (jokes.length === 0) this.getJokes();
  };

  componentDidMount() {
    this.getJokes();
  };
  
  componentDidUpdate(numJokesToGet, jokes) {
    this.getJokes();
  };

  /* empty joke list and then call getJokes */

  generateNewJokes() {
    this.setState({jokes: []});
  }

  /* change vote for this id by delta (+1 or -1) */

  vote(id, delta) {
    this.setState({ jokes: (this.state.jokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))) });
  }

  /* render: either loading spinner or list of sorted jokes. */

  render() {
    if (this.state.jokes.length) {
      let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    
      return (
        <div className="JokeList">
          <button className="JokeList-getmore" onClick={this.generateNewJokes}>
            Get New Jokes
          </button>
    
          {sortedJokes.map(j => (
            <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />
          ))}
        </div>
      );
    }

    return null;
  }
}

export default JokeList;
