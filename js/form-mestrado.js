Vue.component( 'file-input', {
    template: '#file-input',

    props: ['title']
});

new Vue ({
    el: '#app',

    data: {
        name: '',
        birthdate: '',
        gender: '',
        id_type: '',
        id_value: '',
        nationality: '',
        email: '',
        phone: '',
        cep: '',
        address: '',
        address_num: '',
        address_compl: '',
        nbhood: '',
        uf: '',
        city: '',
        country: '',

        institution: '',
        course:'',
        period_start: '',
        period_end: '',
        ira: '',
        lattes: '',

        pc_year: '',
        pc_mat: "",
        pc_prog: "",
        pc_tech: "",
        pc_total: "",

        area1: '',
        area2: '',
        interview_opt: '',
        interview_contact: '',

        new_inst: '',
        new_course: '',
        course_inst: '',

        uf_list: ['-', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        institutions: ['UFC - Fortaleza', 'UECE', 'Unifor'],
        courses: {
            'UFC - Fortaleza': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Engenharia de Telecomunicações', 'Física', 'Matemática', 'Estatística', 'Matemática Industrial'],
            'UECE': ['Ciência da Computação'],
            'Unifor': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica']
        },
        areas1: ['', 'Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica'],
        areas2: ['', 'Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica'],
        int_opts: ['Presencial', 'Skype', 'Telefone', 'Hangout'],
        filters: ['Alfabética (asc.)', 'Alfabética (desc.)', 'Nota Pos-Comp (asc.)', 'Nota Pos-Comp (desc.)', 'IRA (asc.)', 'IRA (desc.)'],

        filter: '',
        next_file_id: 5,
        files: [
            {
                id: 0,
                title: 'Diploma de Graduação',
                required: true
            },
            {
                id: 1,
                title: 'Comprovante de Docência',
                required: true
            },
            {
                id: 2,
                title: 'Comprovante de IC',
                required: true
            },
            {
                id: 3,
                title: 'Comprovante de Monitoria',
                required: true
            },
            {
                id: 4,
                title: 'TCC',
                required: true
            }
        ]
        
    },

    methods: {
        add_pc() {
            this.pc_total = parseInt(this.pc_mat ,10) + parseInt(this.pc_prog ,10)+parseInt(this.pc_tech ,10);
        },

        modal_inst() {
            $("#inst-modal").modal('show');

        },

        modal_course() {
            $("#course-modal").modal('show');
        },

        clear_form(){
            this.name = '';
            this.birthdate =  '';
            this.gender = '';
            this.id_type = '';
            this.id_value = '';
            this.nationality = '';
            this.email = '';
            this.phone = '';
            this.cep = '';
            this.address = '';
            this.address_num = '';
            this.address_compl = '';
            this.nbhood = '';
            this.uf = '';
            this.city = '';
            this.country = '';
    
            this.institution = '';
            this.course = '';
            this.period_start = '';
            this.period_end = '';
            this.ira = '';
            this.lattes = '';
    
            this.pc_year = '';
            this.pc_mat = 0;
            this.pc_prog = 0;
            this.pc_tech = 0;
            this.pc_total = 0;
    
            this.area1 = '';
            this.area2 = '';
            this.interview_opt = '';
            this.interview_contact = '';
        },

        add_inst(){
            this.institutions.push(new_inst);
            this.courses[new_inst] = [];
        },

        add_file: function () {
            this.files.push({
              id: this.next_file_id++,
              title: 'Adicione arquivo',
              required: false
            })
          },

        remove_file: function(index) {
            this.files.splice(index, 1);
        },
        
        submit(){

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
                'address_compl': this.address_compl,
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
                'pc_mat': this.pc_mat,
                'pc_prog': this.pc_prog,
                'pc_tech': this.pc_tech,
                'pc_total': this.pc_total,

                'area1': this.area1,
                'area2': this.area2,
                'interview_opt': this.interview_opt,
                'interview_contact': this.interview_opt,

            
            
            };

        
            axios.post("https://mdcc-2f830.firebaseio.com/alunos.json", newAluno).then(function (r)
            {window.location.replace("index.html");}
            )
            .catch(function (error) {
                console.log(erro);
            });
            
        },

        prevent_duplicate() {     
            this.areas2= [];  
            for (i in this.areas1){
                if (this.areas1[i]!=this.area1){
                    this.areas2.push(this.areas1[i]);
                }
            }
        }
    }
});