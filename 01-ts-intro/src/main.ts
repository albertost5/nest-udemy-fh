import './style.css'
// import { name, age, isValid, templateString } from './basics/01-types';
// import { pkmnIds, charizard, pkmns } from './basics/02-objects';
// import { pkmn } from './basics/03-classes';
// import { charmander } from './basics/04-injection';
// import { charmander } from './basics/05-decorators';
import { charmander } from './basics/06-decorators';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p>${charmander.name} - ${charmander.id}</p>
  </div>
`