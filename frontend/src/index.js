import { h, text, app } from "hyperapp";
import { Http } from "hyperapp-fx";

const API_URL = "http://localhost:3000/api/";

const FetchCard = (state) => [
    state,
    Http({
        url: API_URL + "red",
        action: NewCard,
        response: "text"
    })
]

const NewCard = (state, res) => ({
    ...state,
    currentCard: res
})

const CardMock = (state) => ({
    ...state,
    currentCard: "TEST"
});

const CardDiv = (currentCard) =>
    h("div", { className: "card-div" }, [
        h("p", {}, text(currentCard))
    ]);

const CardButton = (cardType, label, className) => 
    h("button", {
        type: "button",
        className: `card-button ${className}`,
        value: cardType,
        onclick: FetchCard
        }, 
        text(label)
    );

app({
    init: { currentCard: "Choose Red or Blue" },
    view: ({ currentCard }) =>
        h("main", {}, [
            h("h1", { className: "headline"}, text("Hacker Strategies!")),
            CardDiv(currentCard),
            CardButton("red", "Red Team", "red-team"),
            CardButton("blue", "Blue Team", "blue-team"),
        ])
    ,
    node: document.getElementById("app")
});
