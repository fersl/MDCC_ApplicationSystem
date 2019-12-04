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
        pc_mat: 0,
        pc_prog: 0,
        pc_tech: 0,
        pc_total: 0,

        area1: '',
        area2: '',
        interview_opt: '',
        interview_contact: '',

        new_inst: '',
        new_course: '',
        course_inst: '',

        uf_list: ['-', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        institutions: ['UFC - Fortaleza', 'UFC - Sobral', 'UFC - Russas', 'UFC - Quixadá', 'UECE', 'IFCE', 'UFCA', 'URCA', 'UVA', 'UNILAB', 'Unifor', 'FA7', 'Fanor', 'Fametro', 'Unichristus', 'FFB'],
        courses: {
            'UFC - Fortaleza': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Engenharia de Telecomunicações', 'Física', 'Matemática', 'Estatística', 'Matemática Industrial'],
            'UECE': ['Ciência da Computação'],
            'Unifor': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica']
        },
        areas: ['Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica'],
        int_opts: ['Presencial', 'Skype', 'Telefone', 'Hangout']
        
    },

    methods: {
        add_pc() {
            this.pc_total = this.pc_mat + this.pc_prog + this.pc_tech;
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
        }
    }
});