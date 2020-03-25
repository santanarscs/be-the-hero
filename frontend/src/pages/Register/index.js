import React,  { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const history = useHistory();

  async function handleRegister(e)  {
    e.preventDefault();
    const data = {name, email, whatsapp, city, uf }

    try{
      const response = await api.post('/ongs', data)
      alert(`Seu id é ${response.data.id}`)
      history.push('/')
    } catch(err) {
      alert('Erro ao tentar cadastrar')
    }

  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input name={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome da ONG"/>
          <input name={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
          <input name={whatsapp} onChange={e => setWhatsapp(e.target.value)} type="text" placeholder="WhatsApp"/>
          <div className="input-group">
            <input name={city} onChange={e => setCity(e.target.value)} type="text" placeholder="Cidade"/>
            <input name={uf} onChange={e => setUf(e.target.value)} type="text" placeholder="UF" style={{width: 80}}/>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register;