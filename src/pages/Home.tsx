import { gql, useMutation } from '@apollo/client';
import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';


const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}){
        id
    }
   }
`;

const Home = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [createSubscribe, {data, loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION);
    const navigate = useNavigate();

    const handleSubscribe = async (e: FormEvent) => {
        e.preventDefault();

        // await createSubscribe({
        //     variables: {name, email}
        // });

        navigate('/event');
    }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
        <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
            <div className='max-w-[640px]'>
                <img src={logo} alt="Logo da plataforma" />
                <h1 className='mt-8 text-[2.5rem] leading-tight'>
                    Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React JS</strong>
                </h1>
                <p className='mt-4 text-gray-200 leading-relaxed'>
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>
            </div>
            <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
                <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente.</strong>
                <form className='flex flex-col gap-2 w-full' onSubmit={handleSubscribe}>
                    <input 
                        type="text" 
                        placeholder='Seu nome complelto'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='bg-gray-900 rounded h-14 px-5' 
                    />
                    <input 
                        type="text" 
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-900 rounded h-14 px-5' 

                    />
                    <button 
                        type='submit'
                        disabled={loading}
                        className='bg-green-500 uppercase py-4 rounded font-bold text-sm disabled:opacity-50 hover:bg-green-700 transition-colors'
                    >
                        Garantir minha vaga
                    </button>
                </form>
            </div>
        </div>
        <img src="/src/assets/home-bg.png" alt="Background de cadastro" className='mt-10'/>
    </div>
  )
}

export default Home