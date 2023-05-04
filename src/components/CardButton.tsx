import { Card } from "../types"

interface CardButtonProps {
    cardType: string,
    label: string,
    className: string,
    clickHandler: (s: string) => Promise<void >
}

const CardButton = ({cardType, label, className, clickHandler}: CardButtonProps) => (
    <button
        type="button"
        className={className}
        value={cardType}
        onClick={() => clickHandler(cardType) }
    >
        {label}
    </button>
);

export default CardButton;