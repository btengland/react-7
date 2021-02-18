import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import Pokemon from '../Hooks/Pokemon'
import ToggleRenderProps from './ToggleRenderProps'
import ToggleRPC from './ToggleRPC'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <Pokemon/>
      </Toggle>
      <ToggleRenderProps render={(on, setOn, style) => {
        <div style={style}>
          {on && <h1>Showing this</h1>}
          <button style={style} onClick={() => setOn(!on)}></button>
        </div>
      }}/>
      <ToggleRPC>
        {(props) => (
          <div>
            {props.on && <h1>Showing this</h1>}
            <button onClick={() => props.setOn(!props.on)}>Hide/Show</button>
          </div>
        )}
      </ToggleRPC>
    </section>
  )
}
export default RenderProps
