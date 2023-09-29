import { useRef, useState } from "react";

const Formulario = ({ stateForm, stateIMC, stateName, stateHeight, stateWeight }) => {
    const formName = useRef();
    const formWeight = useRef();
    const formHeight = useRef();
    const msgErrorName = useRef();
    const msgErrorWeight = useRef();
    const msgErrorHeight = useRef();
    const interactiveForm = useRef();
    const finalizingForm = useRef();
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [formComplete, setFormComplete] = useState(true);

    function activeResult() {
        return setFormComplete(formComplete);
    }
    function calcIMC() {
        const IMC = (weight / ((height / 100) * (height / 100))).toFixed(1)
        return IMC
    };

    const submitName = (e) => {
        e.preventDefault();
        const clearInput = () => {
            Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""))
        }
        if (name.length > 0 && name.length <= 12) {
            formName.current.classList = "form fade-out "
            formWeight.current.classList = "form p-absolute fade-in"
            clearInput();
        } else if (name.length == 0) {
            msgErrorName.current.classList = "text fade-in--fast"
        }
    }

    const submitWeight = (e) => {
        e.preventDefault();
        const clearInput = () => {
            Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""))
        }
        if (weight > 0) {
            formWeight.current.classList = "form p-absolute fade-out"
            formHeight.current.classList = "form p-absolute fade-in"
            clearInput();
        } else if (weight == 0) {
            msgErrorWeight.current.classList = "text fade-in--fast"
        }
    }

    const submitHeight = (e) => {
        e.preventDefault();
        const clearInput = () => {
            Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""))
        }
        if (height > 0) {
            formHeight.current.classList = "form p-absolute fade-out";
            finalizingForm.current.classList = "p-absolute fade-in";
            calcIMC();
            clearInput();
        } else if (height == 0) {
            msgErrorHeight.current.classList = "text fade-in--fast"
        }
    }

    const nameInput = document.querySelector("#name");
    if (nameInput) {
        nameInput.addEventListener("keypress", function (e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which);
            if (keyCode > 47 && keyCode < 58) {
                e.preventDefault();
            }
        });
    }
    return (
        <section ref={interactiveForm} className="interactive-form">
            <form ref={formName} onSubmit={submitName} className="form" >
                <div className="form_control" >
                    <label htmlFor="name" className="form_control_label text">
                        Antes de começarmos, diga seu primeiro nome ou apelido.
                    </label>
                    <input onChange={({ target }) => setName(target.value)}
                        id="name" className="form_control_input" type="text"
                        placeholder="Nome ou apelido" maxLength="12" />
                    <span ref={msgErrorName} className="text error">
                        Para iniciar, diga um nome ou apelido.
                    </span>
                </div>
                <button type="submit" className="button" onClick={() => stateName(name)}>
                    Confirmar
                </button>
            </form>
            <form ref={formWeight} onSubmit={submitWeight} className="form d-none">
                <div className="form_control">
                    <label htmlFor="weight" className="form_control_label text">
                        Muito bem {name}, para continuarmos diga seu peso corporal.
                    </label>
                    <input onChange={({ target }) => setWeight(parseInt(target.value))}
                        id="weight" className="form_control_input" type="number"
                        placeholder="Peso em kgs" min="0" max="999" />
                    <span ref={msgErrorWeight} className="text error">
                        Para o cálculo preciso saber seu peso
                    </span>
                </div>
                <button type="submit" className="button" onClick={() => stateWeight(weight)}>
                    Confirmar
                </button>
            </form>
            <form ref={formHeight} onSubmit={submitHeight} className="form d-none">
                <div className="form_control">
                    <label htmlFor="height" className="form_control_label text">
                        Ótimo {name}, agora preciso da sua altura em centímetros.
                    </label>
                    <input onChange={({ target }) => setHeight(parseInt(target.value))}
                        id="height" className="form_control_input" type="number"
                        placeholder="Altura em centímetros" min="0" max="250" />
                    <span ref={msgErrorHeight} className="text error">
                        Para poder finalizar preciso saber sua altura
                    </span>
                </div>
                <button type="submit" className="button"
                    onClick={() =>
                        stateHeight(height)}>
                    Confirmar
                </button>
            </form>
            <div ref={finalizingForm} className="finalizing-form d-none">
                <button type="submit" className="button"
                    onClick={() =>
                        stateForm(formComplete) |
                        stateIMC(calcIMC())}>
                    Exibir Resultado
                </button>
            </div>
        </section>
    )
}

export default Formulario;