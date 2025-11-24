import { useEffect, useState } from 'react'
import axios from 'axios'
import './projects.css'

export default function Projects() {

    const [data, setData] = useState([])

    // useEffect(() => axios.get('https://api.github.com/users/sayedmuhammed74/repos')
    //     .then(response => setData(response.data))
    //     .catch(error => console.log(error)), [data])

    return (
        <div id='projects' className='container projects-container'>
            <h1>Portofolio</h1>
            <ul>
                {/* {data.map((item, index) => { return <li key={index}><a href={`https://sayedmuhammed74.github.io/${item.full_name.slice(16)}`}>{item.full_name.slice(16)}</a></li> })} */}
                <li><a href="https://sayedmuhammed74.github.io/TEDx/">Tedx</a></li>
                <li><a href="https://sayedmuhammed74.github.io/Portfolio/">Portfolio</a></li>
                <li><a href="https://sayedmuhammed74.github.io/Loruki/">Loruki</a></li>
                <li><a href="https://sayedmuhammed74.github.io/React_P/">React</a></li>
                <li><a href="https://sayedmuhammed74.github.io/ECommerce/">ECommerce</a></li>
                <li><a href="https://sayedmuhammed74.github.io/bootstrap_bondi/">Bootstrap</a></li>
                <li><a href="https://sayedmuhammed74.github.io/etolv/">Etolv</a></li>
                <li><a href="https://sayedmuhammed74.github.io/egybest/">Egybest</a></li>
                <li><a href="https://sayedmuhammed74.github.io/image_effect/">ImageEffect</a></li>
                <li><a href="https://sayedmuhammed74.github.io/HTML_And_CSS_Responsive/">Responsive</a></li>
                <li><a href="https://sayedmuhammed74.github.io/LampLight/">LampLight</a></li>
                <li><a href="https://sayedmuhammed74.github.io/TodoList/">TodoList</a></li>
                <li><a href="https://sayedmuhammed74.github.io/Ramadan/">Ramadan</a></li>
            </ul>
        </div>
    )
}