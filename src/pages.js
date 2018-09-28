/**
 * Array di oggetti: sezioni della app(name) da renderizzare in base al path
 */
import HomePage from "./components/HomePage/index";
import CounterHOC from "./containers/Counter"; // /Loadable
import ToDo from "./containers/ToDo";
import CounterSaved from "./components/CounterSaved";

const PAGES = [
    {
        path: "/", // || "/HomePage"
        component: HomePage,
        key: "1"
    },
    {
        path: "/item1",
        component: CounterHOC,
        key: "2"
        },
    {
        path: "/item2",
        component: CounterSaved,
        key: "3"
    },
    {
        path: "/item3",
        component: ToDo,
        key: "4"
    }

];

export default PAGES;