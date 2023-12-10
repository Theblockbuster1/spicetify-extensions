import React from "react";
const { useState } = React;

import SettingsProvider from "../modules/settingsProvider";
const { getSetting, setSetting } = SettingsProvider;

function SettingsModal(): React.ReactElement {
  const [opacity, setOpacity] = useState(getSetting("opacity"));
  const [makeTextWhite, setWhiteText] = useState(getSetting("make-text-white"));

  const handleSliderDrag = (value: number) => {
    value = value * 100;
    setOpacity(value);
    setSetting("opacity", value);
  };

  return (
    <div className="ambience-settings">
      <div className="x-settings-section">
        <div className="x-settings-row">
          <div className="x-settings-firstColumn">
            <p>Opacity (%)</p>
          </div>
          <div className="x-settings-secondColumn">
            <Spicetify.ReactComponent.Slider
              max={100}
              step={1}
              value={opacity}
              onDragStart={() => {}}
              onDragMove={handleSliderDrag}
              onDragEnd={handleSliderDrag}
            ></Spicetify.ReactComponent.Slider>
            <span>{Math.round(opacity)}</span>
          </div>
        </div>
        <div className="x-settings-row">
          <div className="x-settings-firstColumn">
            <p>Make text white</p>
          </div>
          <div className="x-settings-secondColumn">
            <Spicetify.ReactComponent.Toggle
              value={makeTextWhite}
              onSelected={(value: boolean) => {
                setWhiteText(value);
                setSetting("make-text-white", value);
              }}
            ></Spicetify.ReactComponent.Toggle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
