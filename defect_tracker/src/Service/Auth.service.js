const AuthenticationService = {
    async login(user) {
        let success = false;
        const responseData = await fetch("http://localhost:5000/Users");
        const allLoginData = await responseData.json();
        allLoginData.forEach(login => {
            if (login.Username == user.Username && login.Password == user.Password) {
                sessionStorage.setItem('authenticatedUser',user.Username);
                sessionStorage.setItem('authenticatedUserId',login.UserId);
                success = true;
            }
        });
        return success
    },

    getLoggedInUser:function(){
        let user=sessionStorage.getItem('authenticatedUser');
        //console.log(user);
        if(user!=null){
            return user;
        }
        else{
            return "";
        }
    },

    getLoggedInUserId:function(){
        let userId = sessionStorage.getItem('authenticatedUserId');
        if(userId!=null){
            return userId;
        }
        else{
            return "";
        }
    },

    logoutUser:function(){
        sessionStorage.setItem('authenticatedUser','');
        sessionStorage.setItem('authenticatedUserId','');
    }
}


export default AuthenticationService;