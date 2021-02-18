import React from 'react'
import '../style.css'
import FunctionalComponent from './FunctionalComponent'
import Counter from './Counter'
import Movies from './Movies'

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <FunctionalComponent />
      <Counter/>
      <Movies/>
    </section>
  )
}
export default Hooks
