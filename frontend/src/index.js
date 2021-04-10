import { h, text, app } from "hyperapp";
import { Http } from "hyperapp-fx";

const API_URL = "http://localhost:3000/api/";

const FetchCard = (state, e) => [
    state,
    Http({
        url: API_URL + e.target.value,
        action: NewCard,
        response: "text"
    })
]

const NewCard = (state, res) => ({
    ...state,
    currentCard: res
})

const CardDiv = (currentCard) => (
    h("div", { className: "card-div" }, [
        h("p", {}, text(currentCard))
    ])
);

const CardButton = (cardType, label, className) => (
    h("button", {
        type: "button",
        className: `card-button ${className}`,
        value: cardType,
        onclick: FetchCard
        }, 
        text(label)
    )
);

const ButtonContainer = (buttons) => (
    h("div", {className: "button-container"}, buttons)
);

const Footer = () => (
    h("footer", {}, [
        h("p", {}, [
            text("Inspiration for when you're stuck")
        ]),
        h("p", {}, [
            text("Inspired by Brian Eno's "),
            h("a", {href: "https://en.wikipedia.org/wiki/Oblique_Strategies"},
            text("Oblique Strategies"))
        ]),
        h("p", {}, [
            text("Made with 💙 by "),
            h("a", {href: "https://taggart-tech.com"}, text("Taggart Tech"))
        ]),
    ])
)

app({
    init: { currentCard: "Choose Red or Blue" },
    view: ({currentCard}) => h("main", {}, [
        h("h1", { className: "headline"}, text("Hacker Strategies")),
        CardDiv(currentCard),
        ButtonContainer([
            CardButton("red", "Red Team", "red-team"),
            CardButton("blue", "Blue Team", "blue-team"),
        ]),
        Footer()
    ]),
    node: document.getElementById("app")
});
