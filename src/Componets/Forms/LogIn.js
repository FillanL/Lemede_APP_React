import React, { Component } from 'react'

class LogIn extends Component {

    handleLogIn =(e)=>{
        e.preventDefault()
        console.log("sign in", e.target);
        
        // fetch('http://localhost:3000/api/v1/campaign',{
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user:{}
        //     }), 
        //   })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleLogIn(e)}>
                    <label htmlFor="username"></label>
                    <input name="username" type="text" placeholder="Username"/>
                    <label htmlFor=""></label>
                    <input name="password" type="password" placeholder="Password"/>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}
export default LogIn
