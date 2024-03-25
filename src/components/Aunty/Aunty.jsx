import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";


const Aunty = () => {
    const[money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Masmiu'}></Cousin>
                <Cousin name={'Rubana'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money+1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Aunty;