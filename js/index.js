new Vue ({
    el: '#login-modal',

    data: {
        login_mail: '',
        login_pwd: ''
    },


    methods:{
        login(){

            var mail = this.login_mail;
            var pwd = this.login_pwd;
            
            axios.get("https://mdcc-2f830.firebaseio.com/admin.json").then(function (r)
            {           

              
                if (r.data['username']== mail && r.data['password']==pwd){
                    console.log("Logado!");
                    window.location.href="./busca-alunos.html";
                    localStorage.setItem('currentUser', JSON.stringify(true));
                    
                }else{
                    console.log("Usuário ou senha incorretos.")
                }
               

           
              


            }
            )
            .catch(function (error) {
                console.log(error);
            });
        }

    }
});

new Vue ({
    el: '#register-modal',

    data: {
        mail: '',
        password: '',
        
    }
});