
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

        students:[]
    },

    mounted(){
        this.getalunos();
    },
    methods: {

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
            $("#modal-carousel").modal('show');
            items = document.getElementsByClassName("item");

            for(aux=0; aux<items.length; aux++) {
                items[aux].classList.remove("active");
            }

            i = document.getElementById(index);
            console.log(i);
            i.classList.add("active");
        },



        buscar(nome){

            
            alunos=[];
            axios.get("https://mdcc-2f830.firebaseio.com/alunos.json").then(function (r)
            {           
                
                
                

                Object.keys(r.data).forEach((key) => {
                    
                    if (r.data[key].name.startsWith(nome,0)|| r.data[key].name.startsWith(nome.toUpperCase(),0)|| r.data[key].name.startsWith(nome.toLowerCase(),0)){
                        alunos.push(r.data[key]);
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
            

            var aluno={
                
                    name:"",
                    date:"",
                    gender:"",
                    id_type: "",
                    id_value: "",
                    nationality:"",
                    email: "",
                    phone: "",
                    cep: "",
                    address: "",
                    address_num: "",
                    nbhood: "",
                    uf: "",
                    city: "",
                    country: "",
                    institution: "",
                    course: "",
                    period_start: "",
                    period_end: "",
                    ira: "",
                    lattes: "",
    
                    pc_year: "",
                    pc_mat: 0,
                    pc_prog: 0,
                    pc_tech: 0,
                    pc_total:0,
    
                    area1: "",
                    area2: "",
                    interview: ""
                
                
            };


            var newAluno = {
                
                'name':this.name,
                'date':this.birthdate,

                'gender': this.gender,
                'id_type': this.id_type,
                'id_value': this.id_value,
                'nationality': this.nationality,
                'email': this.email,
                'phone': this.phone,
                'cep': this.cep,
                'address': this.address,
                'address_num': this.address_num,
                'nbhood': this.nbhood,
                'uf': this.uf,
                'city': this.city,
                'country': this.country,
                'institution': this.institution,
                'course':this.course,
                'period_start': this.period_start,
                'period_end': this.period_end,
                'ira': this.ira,
                'lattes': this.lattes,

                'pc_year': this.pc_year,
                'pc_mat': 0,
                'pc_prog': 0,
                'pc_tech': 0,
                'pc_total': 0,

                'area1': this.area1,
                'area2': this.area2,
                'interview': this.interview,
            
            };
            

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

