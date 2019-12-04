// function institution_modal(){
//     $("#inst-modal").modal('show');
// }

new Vue ({
    el: '#app',

    data: {
        form: {
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
            interview: ''
        },

        
        uf_list: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        institutions: ['UFC - Fortaleza', 'UFC - Sobral', 'UFC - Russas', 'UFC - Quixadá', 'UECE', 'IFCE', 'UFCA', 'URCA', 'UVA', 'UNILAB', 'Unifor', 'FA7', 'Fanor', 'Fametro', 'Unichristus', 'FFB'],
        courses: {
            'UFC - Fortaleza': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Engenharia de Telecomunicações', 'Física', 'Matemática', 'Estatística', 'Matemática Industrial'],
            'UECE': ['Ciência da Computação'],
            'Unifor': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica']
        },
        areas: ['Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica'],
        int_opts: ['Skype', 'Telefone', 'Hangout']
        
    },

    methods: {
        add_pc() {
            this.form.pc_total = this.form.pc_mat + this.form.pc_prog + this.form.pc_tech
        },

        modal_inst() {
            $("#inst-modal").modal('show');

        },

        modal_course() {
            $("#course-modal").modal('show');
        }
    }
});