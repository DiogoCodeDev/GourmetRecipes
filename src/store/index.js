import { createStore } from 'vuex'

export default createStore({
  state: {
    optionsNav: [
      {
        title: 'Lanches', 
        path: '',
        icon: "lanches.webp",
        alt: '',
        categoryType: 1
      },
      {
        title: 'Sobremesas', 
        path: '',
        icon: "pudim.webp",
        alt: '',
        categoryType: 2
      },
      {
        title: 'Jantar', 
        path: '',
        icon: "jantar.webp",
        alt: '',
        categoryType: 3
      },
      {
        title: 'Saudável', 
        path: '',
        icon: "salada.webp",
        alt: '',
        categoryType: 4
      },
      {
        title: 'Bebidas', 
        path: '',
        icon: "bebida.webp",
        alt: '',
        categoryType: 5
      },
      {
        title: 'Café da manhã', 
        path: '',
        icon: "cafe.webp",
        alt: '',
        categoryType: 6
      },
      {
        title: 'Típicas', 
        path: '',
        icon: "feijoada.webp",
        alt: '',
        categoryType: 7
      }
    ],
    optionsRecipesMovie: [
      {
        title: 'Bolo de Cenoura', 
        copy: 'Diogo Code',
        likes: 1238,
        bg: "bolo-de-cenoura",
        alt: 'Bolo de Cenoura',
        categoryType: 6
      },
      {
        title: 'Pudim', 
        copy: 'Diogo Code',
        likes: 1638,
        bg: "pudim",
        alt: 'Pudim',
        categoryType: 2
      },
      {
        title: 'Suco de Laranja', 
        copy: 'Diogo Code',
        likes: 738,
        bg: "suco-de-laranja",
        alt: 'Suco de Laranja',
        categoryType: 5
      },
      {
        title: 'Pastel de Carne', 
        copy: 'Diogo Code',
        likes: 2015,
        bg: "pastel-de-carne",
        alt: 'Pastel de Carne',
        categoryType: 1
      },
      {
        title: 'Sonho de Creme', 
        copy: 'Diogo Code',
        likes: 538,
        bg: "sonho-creme",
        alt: 'Sonho de Creme',
        categoryType: 2
      },
      {
        title: 'Pizza', 
        copy: 'Diogo Code',
        likes: 1315,
        bg: "pizza-de-calabresa",
        alt: 'Pizza de Calabresa',
        categoryType: 1
      },
      {
        title: 'Salada Fitness', 
        copy: 'Diogo Code',
        likes: 642,
        bg: "salada",
        alt: 'Salada Fitness',
        categoryType: 4
      },
      {
        title: 'Feijoada', 
        copy: 'Diogo Code',
        likes: 415,
        bg: "feijoada",
        alt: 'feijoada',
        categoryType: 7
      }
    ],
    restaurantsNews: [
      {
        title: 'Os 3 Melhores Restaurantes do Brasil!',
        subtitle: 'Se você está procurando os melhores lugares para comer no Brasil, então precisa conhecer a Churrascaria X, a Hamburgueria Y e o Restaurante Z. Esses lugares oferecem uma experiência culinária única e inesquecível que fará você se sentir como um verdadeiro gourmet.',
        restaurants: [
          {
            position: 1,
            name:'Churrascaria X',
            text:'A Churrascaria X é sem dúvida alguma o melhor lugar para quem ama carne de qualidade e uma experiência culinária inesquecível. Desde o momento em que você entra, é recebido por um ambiente acolhedor, elegante e sofisticado, que convida a um jantar especial e inesquecível. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado e atencioso aos seus clientes. Eles estão sempre à disposição para responder a qualquer pergunta ou ajudar em qualquer coisa que você precise, tornando sua experiência ainda mais agradável. <br><br> O cardápio é vasto e oferece uma seleção incrível de cortes de carne, incluindo o melhor da culinária brasileira, como picanha, fraldinha e maminha, além de opções de carnes exóticas, como cordeiro e javali. Todas as carnes são preparadas com os melhores ingredientes e condimentos, resultando em um sabor único e inesquecível. <br><br> A Churrascaria X também oferece uma seleção incrível de acompanhamentos, incluindo saladas, pães, arroz, feijão e muito mais. E, para completar a refeição, você pode escolher entre uma ampla seleção de sobremesas, como pudins, tortas, sorvetes e muito mais. <br> <br> O sistema de rodízio é incrível, com garçons passando regularmente para oferecer aos clientes as melhores opções de carne. Isso permite que você experimente vários tipos de carne sem ter que se preocupar em fazer escolhas difíceis. E, se você precisar de mais de uma porção de algum corte específico, basta pedir e o garçom trará mais para você.',
            enjoy: '4.8/5.0',
            vote: '20459',
            local: 'Recife - PB',
            img: ''
          },
          {
            position: 2,
            name:'Hamburgueria Y',
            text:'A Hamburgueria Y é o lugar perfeito para quem ama hambúrgueres de qualidade e uma experiência culinária única. Desde o momento em que você entra, é recebido por um ambiente descontraído, jovem e animado, que convida a uma refeição casual e agradável. <br> <br> A equipe de atendimento é jovem e animada, sempre pronta para oferecer um atendimento amigável e eficiente aos seus clientes. Eles estão sempre à disposição para ajudá-lo a escolher o melhor hambúrguer para você e responder a qualquer pergunta que você tenha. <br> <br> O cardápio é incrível, oferecendo uma ampla variedade de opções de hambúrgueres, desde os clássicos aos mais inovadores. Todos são feitos com os melhores ingredientes, incluindo pães frescos e carnes de qualidade, e são preparados na hora para garantir o sabor mais incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> Os acompanhamentos são incríveis, incluindo batatas fritas, onion rings, salada e muito mais. E, para completar a refeição, você pode escolher entre uma seleção de sobremesas, como sundaes de sorvete e tortas de frutas. <br> <br> A Hamburgueria Y também oferece uma seleção incrível de bebidas, incluindo refrigerantes, sucos, cervejas e muito mais. Além disso, há uma área de jogos disponível para aqueles que querem se divertir um pouco após a refeição. <br> <br> O espaço da hamburgueria é amplo e acolhedor, com mesas compartilhadas e assentos confortáveis para garantir que você se sinta à vontade durante toda a refeição. Além disso, há uma área externa agradável para aqueles que preferem desfrutar do ar livre.',
            enjoy: '4.7/5.0',
            vote: '19859',
            local: 'Fortaleza - CE',
            img: ''
          },
          {
            position: 3,
            name:'Restaurante Z',
            text:'O Restaurante Z é a escolha perfeita para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, oferece uma vista deslumbrante da cidade, que torna a refeição ainda mais especial. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado a cada cliente. Eles estão dispostos a ajudar em tudo, desde a escolha dos pratos até sugestões de vinhos para acompanhar o jantar. <br> <br> O cardápio é uma verdadeira obra de arte, com opções de pratos para agradar a todos os gostos. A equipe de cozinheiros é altamente talentosa e utiliza ingredientes de alta qualidade para preparar cada prato, garantindo assim o sabor único e incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> A carta de vinhos é incrível, oferecendo uma ampla seleção de vinhos de todo o mundo para acompanhar a refeição. Além disso, há uma equipe de sommeliers disponível para ajudá-lo a escolher o melhor vinho para combinar com os pratos. <br> <br>  O ambiente é elegante e acolhedor, com uma decoração refinada que cria um ambiente perfeito para uma noite especial. Além disso, há uma área privada disponível para aqueles que buscam mais privacidade durante o jantar. <br> <br> Em resumo, o Restaurante Z é a escolha ideal para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, equipe de atendimento excepcional, cardápio incrível e ambiente elegante, é o lugar perfeito para um jantar romântico, uma celebração especial ou apenas para desfrutar de uma refeição incrível. Se você ainda não visitou o Restaurante Z, não perca mais tempo e reserve já sua mesa para uma noite inesquecível!',
            enjoy: '4.5/5.0',
            vote: '31859',
            local: 'São Paulo - SP',
            img: ''
          }
        ],
        img: 'news-1',
        date: '12/02/2023',
        created: 'Diogo Code',
      },
      {
        title: 'Compre mais e pague menos!',
        subtitle: 'Comprar mais e pagar menos é uma ideia simples e atraente para qualquer pessoa. Quem não gostaria de ter mais itens pelo mesmo preço ou até mesmo por um preço mais baixo? É por isso que estes estabelecimentos oferecem grandes descontos e promoções.',
        restaurants: [
          {
            position: 1,
            name:'Churrascaria X',
            text:'A Churrascaria X é sem dúvida alguma o melhor lugar para quem ama carne de qualidade e uma experiência culinária inesquecível. Desde o momento em que você entra, é recebido por um ambiente acolhedor, elegante e sofisticado, que convida a um jantar especial e inesquecível. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado e atencioso aos seus clientes. Eles estão sempre à disposição para responder a qualquer pergunta ou ajudar em qualquer coisa que você precise, tornando sua experiência ainda mais agradável. <br><br> O cardápio é vasto e oferece uma seleção incrível de cortes de carne, incluindo o melhor da culinária brasileira, como picanha, fraldinha e maminha, além de opções de carnes exóticas, como cordeiro e javali. Todas as carnes são preparadas com os melhores ingredientes e condimentos, resultando em um sabor único e inesquecível. <br><br> A Churrascaria X também oferece uma seleção incrível de acompanhamentos, incluindo saladas, pães, arroz, feijão e muito mais. E, para completar a refeição, você pode escolher entre uma ampla seleção de sobremesas, como pudins, tortas, sorvetes e muito mais. <br> <br> O sistema de rodízio é incrível, com garçons passando regularmente para oferecer aos clientes as melhores opções de carne. Isso permite que você experimente vários tipos de carne sem ter que se preocupar em fazer escolhas difíceis. E, se você precisar de mais de uma porção de algum corte específico, basta pedir e o garçom trará mais para você.',
            enjoy: '4.8/5.0',
            vote: '20459',
            local: 'Recife - PB',
            img: ''
          },
          {
            position: 2,
            name:'Hamburgueria Y',
            text:'A Hamburgueria Y é o lugar perfeito para quem ama hambúrgueres de qualidade e uma experiência culinária única. Desde o momento em que você entra, é recebido por um ambiente descontraído, jovem e animado, que convida a uma refeição casual e agradável. <br> <br> A equipe de atendimento é jovem e animada, sempre pronta para oferecer um atendimento amigável e eficiente aos seus clientes. Eles estão sempre à disposição para ajudá-lo a escolher o melhor hambúrguer para você e responder a qualquer pergunta que você tenha. <br> <br> O cardápio é incrível, oferecendo uma ampla variedade de opções de hambúrgueres, desde os clássicos aos mais inovadores. Todos são feitos com os melhores ingredientes, incluindo pães frescos e carnes de qualidade, e são preparados na hora para garantir o sabor mais incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> Os acompanhamentos são incríveis, incluindo batatas fritas, onion rings, salada e muito mais. E, para completar a refeição, você pode escolher entre uma seleção de sobremesas, como sundaes de sorvete e tortas de frutas. <br> <br> A Hamburgueria Y também oferece uma seleção incrível de bebidas, incluindo refrigerantes, sucos, cervejas e muito mais. Além disso, há uma área de jogos disponível para aqueles que querem se divertir um pouco após a refeição. <br> <br> O espaço da hamburgueria é amplo e acolhedor, com mesas compartilhadas e assentos confortáveis para garantir que você se sinta à vontade durante toda a refeição. Além disso, há uma área externa agradável para aqueles que preferem desfrutar do ar livre.',
            enjoy: '4.7/5.0',
            vote: '19859',
            local: 'Fortaleza - CE',
            img: ''
          },
          {
            position: 3,
            name:'Restaurante Z',
            text:'O Restaurante Z é a escolha perfeita para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, oferece uma vista deslumbrante da cidade, que torna a refeição ainda mais especial. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado a cada cliente. Eles estão dispostos a ajudar em tudo, desde a escolha dos pratos até sugestões de vinhos para acompanhar o jantar. <br> <br> O cardápio é uma verdadeira obra de arte, com opções de pratos para agradar a todos os gostos. A equipe de cozinheiros é altamente talentosa e utiliza ingredientes de alta qualidade para preparar cada prato, garantindo assim o sabor único e incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> A carta de vinhos é incrível, oferecendo uma ampla seleção de vinhos de todo o mundo para acompanhar a refeição. Além disso, há uma equipe de sommeliers disponível para ajudá-lo a escolher o melhor vinho para combinar com os pratos. <br> <br>  O ambiente é elegante e acolhedor, com uma decoração refinada que cria um ambiente perfeito para uma noite especial. Além disso, há uma área privada disponível para aqueles que buscam mais privacidade durante o jantar. <br> <br> Em resumo, o Restaurante Z é a escolha ideal para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, equipe de atendimento excepcional, cardápio incrível e ambiente elegante, é o lugar perfeito para um jantar romântico, uma celebração especial ou apenas para desfrutar de uma refeição incrível. Se você ainda não visitou o Restaurante Z, não perca mais tempo e reserve já sua mesa para uma noite inesquecível!',
            enjoy: '4.5/5.0',
            vote: '31859',
            local: 'São Paulo - SP',
            img: ''
          }
        ],
        img: 'news-2',
        date: '12/02/2023',
        created: 'Diogo Code',
      },
      {
        title: 'Volta do Reality Mister Chef!',
        subtitle: 'A volta de Mister Chef é uma notícia que está animando os amantes da culinária. Este reality fictício já havia conquistado muitos fãs com suas edições anteriores e agora está de volta com uma nova equipe de participantes e desafios ainda mais emocionantes.',
        restaurants: [
          {
            position: 1,
            name:'Churrascaria X',
            text:'A Churrascaria X é sem dúvida alguma o melhor lugar para quem ama carne de qualidade e uma experiência culinária inesquecível. Desde o momento em que você entra, é recebido por um ambiente acolhedor, elegante e sofisticado, que convida a um jantar especial e inesquecível. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado e atencioso aos seus clientes. Eles estão sempre à disposição para responder a qualquer pergunta ou ajudar em qualquer coisa que você precise, tornando sua experiência ainda mais agradável. <br><br> O cardápio é vasto e oferece uma seleção incrível de cortes de carne, incluindo o melhor da culinária brasileira, como picanha, fraldinha e maminha, além de opções de carnes exóticas, como cordeiro e javali. Todas as carnes são preparadas com os melhores ingredientes e condimentos, resultando em um sabor único e inesquecível. <br><br> A Churrascaria X também oferece uma seleção incrível de acompanhamentos, incluindo saladas, pães, arroz, feijão e muito mais. E, para completar a refeição, você pode escolher entre uma ampla seleção de sobremesas, como pudins, tortas, sorvetes e muito mais. <br> <br> O sistema de rodízio é incrível, com garçons passando regularmente para oferecer aos clientes as melhores opções de carne. Isso permite que você experimente vários tipos de carne sem ter que se preocupar em fazer escolhas difíceis. E, se você precisar de mais de uma porção de algum corte específico, basta pedir e o garçom trará mais para você.',
            enjoy: '4.8/5.0',
            vote: '20459',
            local: 'Recife - PB',
            img: ''
          },
          {
            position: 2,
            name:'Hamburgueria Y',
            text:'A Hamburgueria Y é o lugar perfeito para quem ama hambúrgueres de qualidade e uma experiência culinária única. Desde o momento em que você entra, é recebido por um ambiente descontraído, jovem e animado, que convida a uma refeição casual e agradável. <br> <br> A equipe de atendimento é jovem e animada, sempre pronta para oferecer um atendimento amigável e eficiente aos seus clientes. Eles estão sempre à disposição para ajudá-lo a escolher o melhor hambúrguer para você e responder a qualquer pergunta que você tenha. <br> <br> O cardápio é incrível, oferecendo uma ampla variedade de opções de hambúrgueres, desde os clássicos aos mais inovadores. Todos são feitos com os melhores ingredientes, incluindo pães frescos e carnes de qualidade, e são preparados na hora para garantir o sabor mais incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> Os acompanhamentos são incríveis, incluindo batatas fritas, onion rings, salada e muito mais. E, para completar a refeição, você pode escolher entre uma seleção de sobremesas, como sundaes de sorvete e tortas de frutas. <br> <br> A Hamburgueria Y também oferece uma seleção incrível de bebidas, incluindo refrigerantes, sucos, cervejas e muito mais. Além disso, há uma área de jogos disponível para aqueles que querem se divertir um pouco após a refeição. <br> <br> O espaço da hamburgueria é amplo e acolhedor, com mesas compartilhadas e assentos confortáveis para garantir que você se sinta à vontade durante toda a refeição. Além disso, há uma área externa agradável para aqueles que preferem desfrutar do ar livre.',
            enjoy: '4.7/5.0',
            vote: '19859',
            local: 'Fortaleza - CE',
            img: ''
          },
          {
            position: 3,
            name:'Restaurante Z',
            text:'O Restaurante Z é a escolha perfeita para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, oferece uma vista deslumbrante da cidade, que torna a refeição ainda mais especial. <br><br> A equipe de atendimento é altamente treinada e profissional, sempre pronta para oferecer um atendimento personalizado a cada cliente. Eles estão dispostos a ajudar em tudo, desde a escolha dos pratos até sugestões de vinhos para acompanhar o jantar. <br> <br> O cardápio é uma verdadeira obra de arte, com opções de pratos para agradar a todos os gostos. A equipe de cozinheiros é altamente talentosa e utiliza ingredientes de alta qualidade para preparar cada prato, garantindo assim o sabor único e incrível. Além disso, há opções vegetarianas e veganas disponíveis para aqueles que seguem uma dieta específica. <br> <br> A carta de vinhos é incrível, oferecendo uma ampla seleção de vinhos de todo o mundo para acompanhar a refeição. Além disso, há uma equipe de sommeliers disponível para ajudá-lo a escolher o melhor vinho para combinar com os pratos. <br> <br>  O ambiente é elegante e acolhedor, com uma decoração refinada que cria um ambiente perfeito para uma noite especial. Além disso, há uma área privada disponível para aqueles que buscam mais privacidade durante o jantar. <br> <br> Em resumo, o Restaurante Z é a escolha ideal para quem busca uma experiência culinária inesquecível. Com sua localização privilegiada, equipe de atendimento excepcional, cardápio incrível e ambiente elegante, é o lugar perfeito para um jantar romântico, uma celebração especial ou apenas para desfrutar de uma refeição incrível. Se você ainda não visitou o Restaurante Z, não perca mais tempo e reserve já sua mesa para uma noite inesquecível!',
            enjoy: '4.5/5.0',
            vote: '31859',
            local: 'São Paulo - SP',
            img: ''
          }
        ],
        img: 'news-3',
        date: '12/02/2023',
        created: 'Diogo Code',
      }
    ],
    siteMap: [
      {
          path: '',
          text: 'Home', 
          icon: ''
        },  
      {
          path: '',
          text: 'Receitas', 
          icon: ''
        },
        {
          path: '',
          text: 'Favoritos', 
          icon: ''
        },
        {
          path: '',
          text: 'Típicas', 
          icon: ''
        },
        {
          path: '',
          text: 'Quem somos?', 
          icon: ''
        }
    ],
    copyright :{
      createdby: "Diogo Code",
      socialmidias: [
        {
          text: 'GitHub',
          icon: 'github.svg',
          link: '',
        },
        {
          text: 'Whatsapp',
          icon: 'whatsapp.svg',
          link: '',
        },
        {
          text: 'Instagram',
          icon: 'instagram.svg',
          link: '',
        },
        {
          text: 'Portfólio',
          icon: 'portfolio.svg',
          link: '',
        }
      ]
    } 
  },
  getters: {
  },
  mutations: {
    SET_likeRecipeUser(state, value) {
      state.optionsRecipesMovie = value;
    },
  },
  actions: {
    set_likeRecipe({commit, state}, payload) {
      const { index, arrayRecipes } = payload;
      state.optionsRecipesMovie = arrayRecipes
      state.optionsRecipesMovie[index].likes += 1
      commit('SET_likeRecipeUser', state.optionsRecipesMovie)
    },
  },
  modules: {
  }
})
