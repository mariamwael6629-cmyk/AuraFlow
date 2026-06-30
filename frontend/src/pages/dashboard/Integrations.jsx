import { useEffect, useState } from "react";
import { integrationsApi } from "../../api/endpoints";

export default function Integrations() {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    integrationsApi
      .list()
      .then((res) => setIntegrations(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Integrations</h1>
          <p>Connect the apps your workflows depend on.</p>
        </div>
      </div>

      {loading ? (
        <div className="page-loading" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div> Loading integrations…
        </div>
      ) : (
        <div className="intd-grid">
          {integrations.map((it) => (
            <div className="intd-card" key={it.id}>
              <div className="intd-dot" style={{ background: it.color }}></div>
              <div>
                <div className="intd-name">{it.name}</div>
                <div className="intd-cat">{it.category}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
