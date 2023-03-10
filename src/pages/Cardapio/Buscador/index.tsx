import React from "react";
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}


const Buscador = ({ busca, setBusca }: Props) => {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Buscar"
            />
            <CgSearch              
               style={{ color: '#4D4C5E' }}
               size={30} 
            />

        </div>
    );
}

export default Buscador;