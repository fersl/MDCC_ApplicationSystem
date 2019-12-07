
Vue.component( 'table-students', {
    template: '#table-students'

    // props: ['title']
});

new Vue ({
    el: '#app',

    

    data: {

        
        name: '',
        city: '',
        uf: '',
        course:"",
        institution: '',
        interview: '',
        area1: '',
        area2: '',
        pc_min: 0,
        pc_max: 100,
        ira_min: 0,
        ira_max: 100,
        uf_list: ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        institutions: ['', 'UFC - Fortaleza', 'UFC - Sobral', 'UFC - Russas', 'UFC - Quixadá', 'UECE', 'IFCE', 'UFCA', 'URCA', 'UVA', 'UNILAB', 'Unifor', 'FA7', 'Fanor', 'Fametro', 'Unichristus', 'FFB'],
        courses: {
            'UFC - Fortaleza': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Engenharia de Telecomunicações', 'Física', 'Matemática', 'Estatística', 'Matemática Industrial'],
            'UECE': ['Ciência da Computação'],
            'Unifor': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica']
        },
        default_courses: ['', 'Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Estatística', 'Matemática', 'Matemática Industrial'],
        areas: ['', 'Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica'],
        // areas2: areas1.splice(areas1.indexOf(area1), 1),
        int_opts: ['','Presencial', 'Skype', 'Telefone', 'Hangout'],

        students:[],
       
    },

    mounted(){

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        if (this.currentUser ==null){
            window.location.href="./index.html";
        }
        this.getalunos();
    },
    methods: {

        logout(){
            localStorage.removeItem('currentUser');
            window.location.href="./index.html";
        },
        clear_form() {
            this.name = '';
            this.city = '';
            this.uf = '';
            this.institution = '';
            this.interview = '';
            this.area1 = '';
            this.area2 = '';
            this.pc_min = 0;
            this.pc_max = 100;
            this.ira_min = 0;
            this.ira_max = 100;
        },

        show_info(index) {
            // document.getElementById("slide-container").style.display = "block";
            items = document.getElementsByClassName("carousel-item");

            for(aux=0; aux<items.length; aux++) {
                items[aux].classList.remove("active");
            }

            i = document.getElementById(index);
            console.log(i);
            i.classList.add("active");

            $("#modal-carousel").modal('show');
            // $('.carousel').carousel({
            //     interval: false;
            //   });
        },



        buscar(){

            searchdata ={
                name : this.name,
                uf: this.uf,
                institution: this.institution,
                course: this.course,
                city: this.city,
                area1: this.area1,
                area2 :this.area2,
                interview_opt : this.interview,
              
             
            }

            var pc_min = this.pc_min;
            var pc_max = this.pc_max;
            var ira_max= this.ira_max;
            var ira_min = this.ira_min;
            console.log(searchdata.course + "teste");
    
            
            alunos=[];
            axios.get("https://mdcc-2f830.firebaseio.com/alunos.json").then(function (r)
            {           
                
                
                Object.keys(r.data).forEach((key) => {

                    var boolean = true;
                    for (i in searchdata){
                        
                        if (searchdata[i]!='undefined' && searchdata[i]!=null && searchdata[i]!=''){

                            console.log(i)
                         
                            console.log(r.data[key][i].toUpperCase());
 
                            if(!r.data[key][i].toUpperCase().includes(searchdata[i].toUpperCase())){
                                boolean = false;
                            }

                            

                        }
                    }

                    
                    if(r.data[key]['ira']< ira_min || r.data[key]['ira']>ira_max){
                        
                        boolean= false;
                    } 

                    if(r.data[key]['pc_total']< pc_min || r.data[key]['pc_total']>pc_max){
                        
                        boolean= false;
                    } 

                    
                    if (boolean==true){
                        this.alunos.push(r.data[key]);
                    }
                });
                

      
                

                }
            )
            .catch(function (error) {
                console.log(error);
            });
            this.students=[];
            this.students= alunos;


        },

        getalunos(){
            


            alunos=[];
            axios.get("https://mdcc-2f830.firebaseio.com/alunos.json").then(function (r)
            {           
                
            
                Object.keys(r.data).forEach((key) => {
                    this.alunos.push(r.data[key]);
                });


                }
            )
            .catch(function (error) {
                console.log(error);
            });

            this.students= alunos;
        }
    }
});