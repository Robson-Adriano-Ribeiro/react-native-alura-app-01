import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/tomate.png';
import brocolis from '../../assets/frutas/brocolis.png';
import batata from '../../assets/frutas/batata.png';
import pepino from '../../assets/frutas/pepino.png';
import abobora from '../../assets/frutas/abobora.png';

const cart = {
    header: {
        title: "Detalhes da cesta",
    },
    detail: {
        subTitle: "Cesta de Verduras",
        name: "Jenny Jack Farm",
        logo: logo,
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        price: "R$ 40,00",
        button: "Comprar",
    },
    items: {
        title: "Itens da cesta",
        list: [
            {
                name: "Tomate",
                image: tomate,
            },
            {
                name: "Brócolis",
                image: brocolis,
            },
            {
                name: "Batata",
                image: batata,
            },
            {
                name: "Pepino",
                image: pepino,
            },
            {
                name: "Abóbora",
                image: abobora,
            }
        ]
    }
}

export default cart