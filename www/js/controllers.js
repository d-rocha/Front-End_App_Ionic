angular.module('app.controllers', [])

.controller('visitaRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('visitaRio2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('visitaRio3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'praias': [
        {
          "nome": "Praia de Copacabana",
          "foto": "https://brunovitorprado.github.io/visitario/img/copacabana.jpg",
          "bairro": "Copacabana",
          "endereco": "Av. Atlântica, s/n",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/DcagPrRFuSJ2"
        },
        {
          "nome": "Praia de Ipanema",
          "foto": "https://brunovitorprado.github.io/visitario/img/ipanema.png",
          "bairro": "Ipanema",
          "endereco": "Av. Delfin moreira, s/n",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/8XX3hBELc2n"
        },
        {
          "nome": "Praia da macumba",
          "foto": "https://brunovitorprado.github.io/visitario/img/praia_da_macumba.png",
          "bairro": "Recreio dos Bandeirantes",
          "endereco": "Av. AW, s/n",
          "regiao": "Zona oeste",
          "mapa": "https://goo.gl/maps/xgZc16siiLo"
        },
        {
          "nome": "Prainha",
          "foto": "https://brunovitorprado.github.io/visitario/img/prainha.jpg",
          "bairro": "Recreio dos Bandeirantes",
          "endereco": "Av. Estado da Guanabara, s/n",
          "regiao": "Zona oeste",
          "mapa": "https://goo.gl/maps/4wWzaGZcp3x"
        }
      ],
    };
  }])


.controller('visitaRio4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'hoteis': [
        {
          "nome": "Hotel Galicia",
          "foto": "https://brunovitorprado.github.io/visitario/img/galicia.png",
          "bairro": "Centro",
          "endereco": "R. Carlos de Carvalho, 6",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/YRDHZcnNioz",
          "funcionamento": "Recepção 24 Horas",
          "telefone": "(21) 2221-0211",
          "url": "http://www.hotelgalicia.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Rio's Nice Hotel",
          "foto": "https://brunovitorprado.github.io/visitario/img/rios_nice.png",
          "bairro": "Santa teresa",
          "endereco": "R. Riachuelo, 201",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/6AbdK7DWxuH2",
          "funcionamento": "Recepção 24 Horas",
          "telefone": "(21) 3970-9100",
          "url": "http://www.riosnicehotel.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Mar Palace Copacabana",
          "foto": "https://brunovitorprado.github.io/visitario/img/mar_palace.png",
          "bairro": "Copacabana",
          "endereco": "Av. Ns de Copacabana, 552",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/vHbNHbPAE142",
          "funcionamento": "Recepção 24 Horas",
          "telefone": "(21) 2132-1500",
          "url": "http://www.hotelmarpalace.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Everest Rio Hotel",
          "foto": "https://brunovitorprado.github.io/visitario/img/everest.png",
          "bairro": "Ipanema",
          "endereco": "R. Prudente de Morais, 1117",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/us3toSmNvT22",
          "funcionamento": "Recepção 24 Horas",
          "telefone": "(21) 2525-2200",
          "url": "http://www.everest.com.br/",
          "site": "Ir ao site "
        }
      ],
    };
  }])

.controller('visitaRio5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };

    $scope.model = {
      'eventos': [
        {
          "nome": "Garbage",
          "foto": "https://brunovitorprado.github.io/visitario/img/garbage_band.jpg",
          "local": "Circo voador",
          "bairro": "Lapa",
          "endereco": "Rua dos Arcos, s/n",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/LncKtcCN8iK2",
          "horario": "11/12 19:00",
          "tipo": "Evento musical",
          "custo": "Veja no site",
          "telefone": "(21) 2533-0354",
          "url": "http://www.circovoador.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Lulu Santos",
          "foto": "https://brunovitorprado.github.io/visitario/img/lulu_santos.jpg",
          "local": "Metropolitam",
          "bairro": "Barra da Tijuca",
          "endereco": "Av. Ayrton Senna, 3000",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/CkmXf66xWR62",
          "horario": "17/12 22:30",
          "tipo": "Evento musical",
          "custo": "Veja no site",
          "telefone": "(21) 2430-5100",
          "url": "http://www.premier.ticketsforfun.com.br/shows/show.aspx?sh=LULUSUB",
          "site": "Ir ao site "
        },
        {
          "nome": "A Janela Mágica + Museu",
          "foto": "https://brunovitorprado.github.io/visitario/img/a_janela_magica.png",
          "local": "Fundação planetário",
          "bairro": "Gávea",
          "endereco": "R. Vice Gov. Rubens Berardo 100",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/bS8Af9khQU22",
          "horario": "17/12 15:00",
          "tipo": "Animação",
          "custo": "Veja no site",
          "telefone": "(21) 2088-0536",
          "url": "http://www.ingresso.com/rio-de-janeiro/home/espetaculo/eventos/a-janela-magica-museu",
          "site": "Ir ao site "
        },
        {
          "nome": "O Aniversário do Pingo",
          "foto": "https://brunovitorprado.github.io/visitario/img/aniversario_pingo.PNG",
          "local": "Fundação planetário",
          "bairro": "Gávea",
          "endereco": "R. Vice Gov. Rubens Berardo, 100",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/bS8Af9khQU22",
          "horario": "18/12 15:00",
          "tipo": "Animação",
          "custo": "Veja no site",
          "telefone": "(21) 2088-0536",
          "url": "http://www.ingresso.com/rio-de-janeiro/home/espetaculo/eventos/o-aniversario-do-pingo-museu",
          "site": "Ir ao site "
        },
        {
          "nome": "Meu Passado Me Condena",
          "foto": "https://brunovitorprado.github.io/visitario/img/meu_passado.png",
          "local": "Fundação planetário",
          "bairro": "Gávea",
          "endereco": "R. Marquês de São Vicente, 52",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/42Z26cLMzWB2",
          "horario": "18/12 20:00",
          "tipo": "Teatro/Comédia",
          "custo": "Veja no site",
          "telefone": "(21) 2088-0536",
          "url": "http://www.ingresso.com/rio-de-janeiro/home/espetaculo/teatro/meu-passado-me-condena",
          "site": "Ir ao site "
        }
      ],
    };
  }])


.controller('visitaRio6Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };

    $scope.model = {
      'delegacias': [
        {
          "nome": "5ª Delegacia Policial",
          "foto": "https://brunovitorprado.github.io/visitario/img/5-DP.PNG",
          "bairro": "Centro",
          "endereco": "Av. Gomes Freire, 320",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/zaEVtvF9Fqn",
          "funcionamento": "24 Horas",
          "servico": "Plantão policial",
          "telefone": "(21) 2332-8110",
          "url": "http://www.policiacivil.rj.gov.br",
          "site": "Ir ao site "
        },
        {
          "nome": "12ª Delegacia Policial",
          "foto": "https://brunovitorprado.github.io/visitario/img/12-DP.PNG",
          "bairro": "Copacabana",
          "endereco": "Rua Hilário de Gouvêia, 102",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/Cw6VdDXBsgP2",
          "funcionamento": "24 Horas",
          "servico": "Plantão policial",
          "telefone": "(21) 2332-7914",
          "url": "http://www.policiacivil.rj.gov.br",
          "site": "Ir ao site "
        },
        {
          "nome": "17ª Delegacia Policial",
          "foto": "https://brunovitorprado.github.io/visitario/img/17-DP.PNG",
          "bairro": "São cristóvão",
          "endereco": "R. São Cristóvão, 309",
          "regiao": "Zona norte",
          "mapa": "https://goo.gl/maps/N1vskMzeJFx",
          "funcionamento": "24 Horas",
          "servico": "Plantão policial",
          "telefone": "(21) 2334-8504",
          "url": "http://www.policiacivil.rj.gov.br",
          "site": "Ir ao site "
        }
      ],
    };
  }])

.controller('visitaRio7Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'hospitais': [
        {
          "nome": "Hospital Souza Aguiar",
          "foto": "https://brunovitorprado.github.io/visitario/img/souza_aguiar.png",
          "bairro": "Centro",
          "endereco": "Praça da República, 111",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/YyGSUyTGzTU2",
          "funcionamento": "24 Horas",
          "servico": "Público",
          "custo": "Gratuito",
          "telefone": "(21) 3111-2611",
          "url": "http://www.hospitalsouzaaguiar.blogspot.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Hospital Espanhol",
          "foto": "https://brunovitorprado.github.io/visitario/img/hospital_espanhol.jpg",
          "bairro": "Centro",
          "endereco": "R. Riachuelo, 302",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/5tSYZFf7xcr",
          "funcionamento": "24 Horas",
          "servico": "Particular",
          "custo": "Não informado",
          "telefone": "(21) 2158-9000",
          "url": "http://www.hospitalespanholrj.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Hospital Pedro Ernesto",
          "foto": "https://brunovitorprado.github.io/visitario/img/pedro_ernesto.png",
          "bairro": "Vila isabel",
          "endereco": "Boulevard 28 de Setembro, 77",
          "regiao": "Zona norte",
          "mapa": "https://goo.gl/maps/5tSYZFf7xcr",
          "funcionamento": "08:00 às 19:00",
          "servico": "Público",
          "custo": "Gratuito",
          "telefone": "(21) 2868-8000",
          "url": "http://www.hupe.uerj.br",
          "site": "Ir ao site "
        }
      ]
    };
  }])

.controller('visitaRio8Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'pontos': [
        {
          "nome": "Bondinho Pão de Açúcar",
          "foto": "https://brunovitorprado.github.io/visitario/img/pao_de_acucar.jpg",
          "bairro": "Urca",
          "endereco": "Praça Gen. Tibúrcio, 520",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/js37Xxiq3Wk",
          "funcionamento": "08:00 às 19:50",
          "servico": "Privado",
          "custo": "Valores variados",
          "telefone": "(21) 2546-8433",
          "url": "http://www.bondinho.com.br",
          "site": "Ir ao site "
        },
        {
          "nome": "Cristo Redentor",
          "foto": "https://brunovitorprado.github.io/visitario/img/cristo.jpg",
          "bairro": "Alto da Boa Vista",
          "endereco": "Parque Nacional da Tijuca",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/5tSYZFf7xcr",
          "funcionamento": "08:00 às 19:00",
          "servico": "Privado",
          "custo": "Valores variados",
          "telefone": "(21) 2492-2252",
          "url": "https://www.cristoredentoroficial.com.br",
          "site": "Ir ao site "
        },
        {
          "nome": "Ilha Fiscal",
          "foto": "https://brunovitorprado.github.io/visitario/img/ilha_fiscal.jpg",
          "bairro": "Centro",
          "endereco": "Av. Alfredo Agache, s/n",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/aLwij9XX3GE2",
          "funcionamento": "11:30, 14h e 15:30",
          "servico": "Publico",
          "custo": "Valores variados",
          "telefone": "(21) 2104-6025",
          "url": "https://www1.mar.mil.br/dphdm/ilha-fiscal",
          "site": "Ir ao site "
        },
        {
          "nome": "Mirante do Leblon",
          "foto": "https://brunovitorprado.github.io/visitario/img/mirante_leblon.png",
          "bairro": "Leblon",
          "endereco": "Av. Niemeyer, s/n",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/mQ2JDi1KDXJ2",
          "funcionamento": "24 Horas",
          "servico": "Logradouro publico",
          "custo": "Acesso gratuito",
          "telefone": "Não se aplica",
          "url": "http://www.riodejaneiroaqui.com/portugues/mirante-do-leblon.html",
          "site": "Ir ao site "
        },
        {
          "nome": "Forte de Copacabana",
          "foto": "https://brunovitorprado.github.io/visitario/img/forte_copacabana.jpg",
          "bairro": "Copacabana",
          "endereco": "Av. Atlântica, Posto 6",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/mQ2JDi1KDXJ2",
          "funcionamento": "Ter a Dom, 10hrs às 18Hrs",
          "servico": "Privado",
          "custo": "Veja no site",
          "telefone": "(21) 2521-1032",
          "url": "http://www.fortedecopacabana.com/",
          "site": "Ir ao site "
        },
        {
          "nome": "Forte Duque de Caxias",
          "foto": "https://brunovitorprado.github.io/visitario/img/forte_duque_de_caxias.png",
          "bairro": "Leme",
          "endereco": "Praça Almirante Júlio de Noronha, s/n",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/imcj2sm8wD82",
          "funcionamento": "Ter a Dom, 09:30 às 16:30",
          "servico": "Privado",
          "custo": "Veja no site",
          "telefone": "(21) 3223-5076",
          "url": "http://www.cep.ensino.eb.br/",
          "site": "Ir ao site "
        }
      ],
    };
  }])

.controller('visitaRio9Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'banheiros': [
        {
          "nome": "Posto 1",
          "foto": "https://brunovitorprado.github.io/visitario/img/posto_1.png",
          "bairro": "Leme",
          "endereco": "Av. Atlântica, 590",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/rn9mayNKT832",
          "funcionamento": "24 Horas",
          "servico": "Público",
          "custo": "Gratuito",
          "restricao": "Nenhuma informada",
          "telefone": "(21) 3154.8282",
          "url": "http://orlario.com.br/site/technology/postos-de-salvamento/",
          "site": "Ir ao site "
        },
        {
          "nome": "Posto 2",
          "foto": "https://brunovitorprado.github.io/visitario/img/posto_2.png",
          "bairro": "Copacabana",
          "endereco": "Av. Atlântica, 1430",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/3CPG77uUcQy",
          "funcionamento": "24 Horas",
          "servico": "Público",
          "custo": "Gratuito",
          "restricao": "Nenhuma informada",
          "telefone": "(21) 3154.8282",
          "url": "http://orlario.com.br/site/technology/postos-de-salvamento/",
          "site": "Ir ao site "
        },
        {
          "nome": "Base 13",
          "foto": "https://brunovitorprado.github.io/visitario/img/base_13.PNG",
          "bairro": "Copacabana",
          "endereco": "Av. Atlântica, sn",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/rzQy3RtE4rM2",
          "funcionamento": "08:00 às 00:00",
          "servico": "Público",
          "custo": "Gratuito",
          "restricao": "Nenhuma informada",
          "telefone": "(21) 3154.8282",
          "url": "http://orlario.com.br/site/technology/postos-de-salvamento/",
          "site": "Ir ao site "
        },
        {
          "nome": "Base 14",
          "foto": "https://brunovitorprado.github.io/visitario/img/base_14.PNG",
          "bairro": "Copacabana",
          "endereco": "Av. Atlântica, sn",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/wri494Uu6ss",
          "funcionamento": "08:00 às 00:00",
          "servico": "Público",
          "custo": "Gratuito",
          "restricao": "Nenhuma informada",
          "telefone": "(21) 3154.8282",
          "url": "http://orlario.com.br/site/technology/postos-de-salvamento/",
          "site": "Ir ao site "
        },
        {
          "nome": "UFA",
          "foto": "https://brunovitorprado.github.io/visitario/img/ufa.png",
          "bairro": "Tijuca",
          "endereco": "Praça Saenz Peña, sn",
          "regiao": "Zona norte",
          "mapa": "https://goo.gl/maps/wSuumXcZFC22",
          "funcionamento": "24 Horas",
          "servico": "Público",
          "custo": "Gratuito",
          "restricao": "Apenas mictório",
          "telefone": "N/A",
          "site": ""
        }
      ],

    };
  }])

.controller('visitaRio10Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {

    $scope.detalhe = false;

    $scope.clique = function () {

      $scope.detalhe = !$scope.detalhe;

    };


    $scope.model = {
      'restaurantes': [
        {
          "nome": "Cataroca",
          "foto": "https://brunovitorprado.github.io/visitario/img/cataroca.PNG",
          "bairro": "Centro",
          "endereco": "Rua da Carioca, 47",
          "regiao": "Centro",
          "mapa": "https://goo.gl/maps/KBQa9WzYRaF2",
          "funcionamento": "Seg a Sex, 11 às 16hs",
          "telefone": "(21) 2220-4225",
          "url": "http://www.cataroca.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Estação Siqueira Galeteria",
          "foto": "https://brunovitorprado.github.io/visitario/img/estacao_siqueira.png",
          "bairro": "Copacabana",
          "endereco": "R. Siqueira Campos, 117",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/gzvzv5S6uSm",
          "funcionamento": "11:00 às 00:00",
          "telefone": "(21) 2158-9000",
          "url": "http://www.estacaosiqueiragaleteria.com.br/",
          "site": "Ir ao site "
        },
        {
          "nome": "Tô nem aí",
          "foto": "https://brunovitorprado.github.io/visitario/img/to_nem_ai.png",
          "bairro": "Ipanema",
          "endereco": "R. Farme de Amoedo, 57",
          "regiao": "Zona sul",
          "mapa": "https://goo.gl/maps/gzosBpCcHmo",
          "funcionamento": "11:45 às 03:00",
          "telefone": "(21) 2247-8403",
          "url": "http://www.tonemai.vitrinevirtual.net/",
          "site": "Ir ao site "
        },
        {
          "nome": "Chapéu de Couro",
          "foto": "https://brunovitorprado.github.io/visitario/img/chapeu_de_couro.png",
          "bairro": "Bonsucesso",
          "endereco": "Av. Guilherme Maxwell, 437",
          "regiao": "Zona norte",
          "mapa": "https://goo.gl/maps/nd4X5a5SGoF2",
          "funcionamento": "11:30 às 23:00",
          "telefone": "(21) 2290-3474",
          "url": "http://www.restaurantechapeudecouro.com.br/",
          "site": "Ir ao site "
        }
      ],

    };
  }])
