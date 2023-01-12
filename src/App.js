import { useState } from "react";

const App = () => {
    const [value, setValue] = useState({
        normal: 'Normal', 
        texto: '', 
        select: '', 
        check: false, 
        estado: 'triste' 
    });
    const handleChange = ({target}) => {
        setValue((state) =>({
            ...state,
            [target.name]: target.type === 'checkbox' 
            ? target.checked 
            : target.value
        }))

        // setValue({
        //     ...value,
        //     [e.target.name]: e.target.value
        // })
    }
    console.log(value);
    return(
        <div>
            {value.length < 5 ? <span>minimo de 5</span> : null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange} />
            <textarea name="texto" onChange={handleChange} value={value.texto} />
            <select value={value.select} name="select" onChange={handleChange}>
                <option value=''>-- seleccione --</option>
                <option value='feliz'>Feliz</option>
                <option value='triste'>Triste</option>
                <option value='enojado'>Enojado</option>
                <option value='sorpendido'>Sorprendido</option>
            </select>

            <input
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Chancho</label>
                <input
                    type="radio"
                    name="estado"
                    value="feliz"
                    onChange={handleChange}
                    checked={value.estado === 'feliz'}
                /> Feliz
                <input
                    type="radio"
                    name="estado"
                    value="triste"
                    onChange={handleChange}
                    checked={value.estado === 'triste'}
                /> Triste
                <input
                    type="radio"
                    name="estado"
                    value="enojado"
                    onChange={handleChange}
                    checked={value.estado === 'enojado'}
                /> Enojado
            </div>

        </div>
    );
};


export default App;