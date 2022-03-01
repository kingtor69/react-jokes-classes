import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: this.props.vote,
      votes: this.props.votes
    }
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    this.setState({vote: this.state.vote(id, +1)});
  }

  downVote() {
    this.setState({vote: this.state.vote(id, -1)});
  };

  render() {
    const { text, id } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  };
};

export default Joke;
