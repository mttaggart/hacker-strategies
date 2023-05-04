import { Card } from "../types";
import CardButton from "./CardButton";

interface ButtonContainerProps {
    clickHandler: (s: string) => Promise<void>
}

const ButtonContainer = ({clickHandler}: ButtonContainerProps) => (
    <>
    {["Red", "Blue"].map(c => (
        <CardButton
            key={c}
            cardType={c.toLowerCase()}
            className={`card-button ${c.toLowerCase()}`}
            label={`${c} Team`}
            clickHandler={clickHandler} 
            />
    ))}
    </>
);

export default ButtonContainer;