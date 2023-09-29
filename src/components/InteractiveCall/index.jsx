import { useLottie } from 'lottie-react'
import helloAnimation from '../../../lib/animation_hello.json'

const InteractiveCall = () => {
    const options = {
        animationData: helloAnimation,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <section className="interactive-call">
            <div className="animation">
                {View}
            </div>
            <div className="text-group">
                <h2 className="title">
                    Bem Vindo!!
                </h2>
                <p className="text">
                    Vamos descobrir se seu peso corporal é saudável? <br />
                    Responda as perguntas e veja o resultado!!
                </p>
            </div>
        </section>
    )
}

export default InteractiveCall;