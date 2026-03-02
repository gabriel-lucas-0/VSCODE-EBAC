import { Destino } from "@/types/types";
import styles from "./Card.module.css";

type Props = {
  destino: Destino;
};

const Card = ({ destino }: Props) => {
  const { id, nome, imagem } = destino;
  return (
    <div className={styles.card} key={id}>
      <img
        src={imagem}
        alt={`Imagem de destino ${nome}`}
        width={300}
        height={200}
      />
      <div>
        <h2 className={styles.card__title}>{nome}</h2>
        <div className={styles.card__btnBox}>
          <button className={styles.card__button}>Saiba mais...</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
