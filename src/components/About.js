import UserContext from "../utils/UserContext";
import Userclass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      
        return (
            <div>
              <div>              <UserContext.Consumer>
        {(data) => <h1>{data.loggedInUser}</h1>}
      </UserContext.Consumer>
      </div>
              <h1>This is About us Page</h1>
              {<Userclass name="AMit user class" mobile = "881111111" />}
            </div>
      );
    }
}


// const About = () => {
//     return (
//           <div>
//             <h1>This is About us Page</h1>
//             {<Userclass name="AMit user class" mobile = "881111111" />}
//           </div>
//     );
// }

export default About;