import './square.scss';

export default function Square({ ind, updateSquares, clsName}){
    
    const handleClick = () => {
        updateSquares(ind);
    };
    return (
        <div
            className="square"
            onClick={handleClick}
        >
            {clsName && (
                <span
                    className={clsName}
                ></span>
            )}
        </div>
    );
};

export const Square5 = ({ ind, updateSquares, clsName }) => {
    const handleClick = () => {
        updateSquares(ind);
    };
    return (
        <div
            className="square5"
            onClick={handleClick}
        >
            {clsName && (
                <span
                    className={clsName}
                ></span>
            )}
        </div>
    );
};