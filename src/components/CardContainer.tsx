interface CardContainerProps {
    currentCard: String
}


const CardContainer = ({currentCard}: CardContainerProps) => (
    <div className="card-container">
        <p>{currentCard}</p>
    </div>
);

export default CardContainer;