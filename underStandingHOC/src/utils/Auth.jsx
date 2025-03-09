const Auth = (Component) =>{
    const isAuthenticated = true
    return function(props){
        if(isAuthenticated){
           return <Component {...props} extra="this is extra "/>
        }
        else{
            return <p>Please Login First</p>
        }

    }
}
export default Auth