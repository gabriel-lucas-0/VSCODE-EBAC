import { Destino } from "@/types/types";
import Card from "@/components/Card";
import styles from "./Grid.module.css";

type Props = {
  destinos: Destino[];
};

const Grid = ({ destinos }: Props) => {
    return (
        <section className={styles.grid}>
            {destinos.map(destino => <Card key={destino.id} destino={destino} />)}
        </section>
    );
}
export default Grid;