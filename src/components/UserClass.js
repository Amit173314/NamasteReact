import React from "react";

class Userclass extends React.Component {
  constructor(props){
     super(props);
     this.state = {
        userInfo:{
            name: "",
            login: ""
        }
     }
    }

    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/amit-chauhan29");
      const jsonData = await data.json();
      this.setState({
        userInfo : jsonData
      });
    }

    render(){
        const {name, mobile} = this.props;
        const {count, count2} = this.state;
        return (
            <div>
                <h1>{this.state.userInfo.name}</h1>
                <h1>{this.state.userInfo.login}</h1>
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count +1,
                        count2 : count2 + 2
                    });
                }}>Increase Count</button>
                <h1>Count2: {count2}</h1>
            </div> 
        )
    }
};

export default Userclass;