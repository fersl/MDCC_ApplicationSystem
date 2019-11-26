new Vue ({
    el: '#app',

    data: {
        institution: '',
        course: '',
        area1: '',
        area2: '',
        institutions: ['UFC - Fortaleza', 'UFC - Sobral', 'UFC - Russas', 'UFC - Quixadá', 'UECE', 'IFCE', 'UFCA', 'URCA', 'UVA', 'UNILAB', 'Unifor', 'FA7', 'Fanor', 'Fametro', 'Unichristus', 'FFB'],
        courses: {
            'UFC - Fortaleza': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica', 'Engenharia de Telecomunicações', 'Física', 'Matemática', 'Estatística', 'Matemática Industrial'],
            'UECE': ['Ciência da Computação'],
            'Unifor': ['Ciência da Computação', 'Engenharia da Computação', 'Engenharia Elétrica']
        },
        areas: ['Engenharia de Software', 'Inteligência Artificial', 'Lógica', 'Algoritmos', 'Bancos de Dados', 'Redes', 'Computação Gráfica']
        
    }
});