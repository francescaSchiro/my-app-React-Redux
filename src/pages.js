/**
 * Array di oggetti: sezioni della app(name) da renderizzare in base al path
 */
import CounterHOC from "./containers/Counter/index"; // /Loadable
import ToDo from "./containers/ToDo";
import ResetHOC from "./containers/Reset";
import TicTacToe from "./containers/TicTacToe";
import Card from "./containers/Card";
import Parallax from "./containers/Parallax";
import Scroll from "./containers/Scroll";
import NotFoundPage from "./components/NotFoundPage";

 export const PAGES = [

    {
        path: "/counter",
        component: CounterHOC,
        key: "Counter"
    },
    {
        path: "/reset",
        component: ResetHOC,
        key: "Reset"
    },
    {
        path: "/todolist/",
        component: ToDo,
        key: "Todo List"
    },
    {
        path: "/tictactoe",
        component: TicTacToe,
        key: "Tic Tac Toe"
    },
    {
        path: "/card",
        component: Card,
        key: "Card"
    },
    {
        path: "/parallax",
        component: Parallax,
        key: "Parallax"
    },
    {
        path: "/scroll",
        component: Scroll,
        key: "Scroll"
    },
    {
        path: "/404",
        component: NotFoundPage,
        key: "NotFoundPage"
    }


];



export const NAV = [
    {
        path: "/counter",
        component: CounterHOC,
        key: "Counter"
    },
    {
        path: "/reset",
        component: ResetHOC,
        key: "Reset"
    },
    {
        path: "/todolist",
        component: ToDo,
        key: "Todo List"
    },
    {
        path: "/tictactoe",
        component: TicTacToe,
        key: "Tic Tac Toe"
    },
    {
        path: "/card",
        component: Card,
        key: "Card"
    },
    {
        path: "/parallax",
        component: Parallax,
        key: "Parallax"
    },
    {
        path: "/scroll",
        component: Scroll,
        key: "Scroll"
    }

];
