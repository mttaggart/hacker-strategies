import {Card} from "../types"

interface CardContainerProps {
    currentCard: Card
}

const CardContainer = ({currentCard}: CardContainerProps) => (
    <div className="card-container">
        <p>{currentCard.text}</p>
    </div>
);

export default CardContainer;