import "./index.scss"

wp.blocks.registerBlockType("es6/reactads", {
  title: "Ad Block With React Frontend",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" }
  },
  edit: EditComponent,
})

function EditComponent(props) {
  function updateSkyColor(e) {
    props.setAttributes({ skyColor: e.target.value })        
    const blockProps = useBlockProps( { style: blockStyle } );
    return (
        <div { ...blockProps }>Hello World (from the editor).</div>
    );
  }

  function updateGrassColor(e) {
    props.setAttributes({ grassColor: e.target.value })
  }

  return (
    <div className="es6-block-type">
      <input type="text" value={props.attributes.skyColor} onChange={updateSkyColor} placeholder="sky color..." />
      <input type="text" value={props.attributes.grassColor} onChange={updateGrassColor} placeholder="grass color..." />
    </div>
  )
}
