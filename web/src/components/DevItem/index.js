import React from 'react'
import './style.css'

function DevItem({dev}){

    //function DevItem(props){
    // const {dev} = props
    //Mesma forma de passar as propriedades em ambas linhas
  
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}

export default DevItem