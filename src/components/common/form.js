import React from "react";

export default function From ({initialName = '',onSubmit, styles = {color:'white'}}) {
    const [heroName, setHeroName] = React.useState(initialName);
    function handleSubmit(e) {
      e.preventDefault()
      onSubmit(heroName)
    }

    function handleChange(e) {
        setHeroName(e.target.value)
      }


    return(
    <form onSubmit={handleSubmit} className="input-form"  style={styles}>
      <div>
          <input
            className="field-input"
            id="field-input"
            name="heroName"
            placeholder="Please enter name"
            value={heroName}
            onChange={handleChange}
          />
          <button type="submit" disabled={!heroName.length}>
            Submit
          </button>
        </div>
    </form>
    )
  }
