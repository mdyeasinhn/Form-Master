import Friend from "../Friend/Friend";
import Special from "../Specail/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name ==="Robaiya" && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;