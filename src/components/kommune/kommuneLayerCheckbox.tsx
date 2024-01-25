import React, {SetStateAction, useState} from "react";

export function KommuneLayerCheckbox({setLayers}: {
    setLayers: SetStateAction<any>
}) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "Hide" : "Show"} kommuner
      </label>
    </div>
  );
}
