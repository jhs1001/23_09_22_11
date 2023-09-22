import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
    cushion,
    setCushion,
    mat,
    setMat,
    copyTextures,
    setCopyTextures,
  
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Matrix material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
          <div
            className={`item ${material === "MAT03" ? "item--active" : ""}`}
            onClick={() => setMaterial("MAT03")}
          >
            <div className="item__label">MAT03</div>
          </div>
          <div
            className={`item ${material === "MAT04" ? "item--active" : ""}`}
            onClick={() => setMaterial("MAT04")}
          >
            <div className="item__label">MAT04</div>
          </div>
          <div
            className={`item ${material === "MAT05" ? "item--active" : ""}`}
            onClick={() => setMaterial("MAT05")}
          >
            <div className="item__label">MAT05</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Matrix color</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Frame color</div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Headboard</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item__label">A</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item__label">B</div>
          </div>
          <div
              className={`item ${legs === 3 ? "item--active" : ""}`}
              onClick={() => setLegs(3)}
          >
            <div className="item__label">C</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Cushion ?</div>
        <div className="configurator__section__values">
          <div
              className={`item ${cushion? "item--active" : ""}`}
              onClick={() => setCushion(true)}
          >
            <div className="item__label">ON</div>
          </div>
          <div
              className={`item ${!cushion ? "item--active" : ""}`}
              onClick={() => setCushion(false)}
          >
            <div className="item__label">OFF</div>
          </div>
        </div>
        <div className="configurator__section">
      <div className="configurator__section__title">MAT</div>
          <div className="configurator__section__values">
              <div
                  onClick={() => setMat(true)}
              >
                  <div className="item__label">ON</div>
              </div>
              <div
                  onClick={() => setMat(false)}
              >
                  <div className="item__label">OFF</div>
              </div>
          </div>
        </div>
        <button onClick={() => setCopyTextures(!copyTextures)}>
          {copyTextures ? "Undo Copy Textures" : "Copy Textures"}
        </button>
      </div>
    </div>
  );
};

export default Configurator;
