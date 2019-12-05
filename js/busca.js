var students = [
    {
        id: 0,
        name: 'Fulanito da Silva',
        uf: 'CE',
        city: 'Fortaleza',
        institution: 'Institution A',
        course: 'Course A',
        interview: 'Skype',
        area1: 'Inteligência Artificial',
        area2: 'Bancos de Dados',
        pos_comp: 85,
        ira: 5
    },
    {
        id: 1,
        name: 'Sicranito dos Santos',
        uf: 'CE',
        city: 'Fortaleza',
        institution: 'Institution A',
        course: 'Course B',
        interview: 'Presencial',
        area1: 'Lógica',
        area2: 'Algoritmos',
        pos_comp: 90,
        ira: 8
    }
];

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

        students: students
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
        }
    }
});

  