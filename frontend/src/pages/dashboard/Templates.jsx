import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { templatesApi } from "../../api/endpoints";

const TAG_CLASS = {
  popular: "tt-popular",
  new: "tt-new",
  ai: "tt-ai",
};
const TAG_LABEL = {
  popular: "Popular",
  new: "New",
  ai: "AI-powered",
};

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingId, setUsingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    templatesApi
      .list()
      .then((res) => setTemplates(res.data))
      .finally(() => setLoading(false));
  }, []);

  async function handleUse(id) {
    setUsingId(id);
    try {
      await templatesApi.use(id);
      navigate("/dashboard/workflows");
    } finally {
      setUsingId(null);
    }
  }

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Templates</h1>
          <p>Deploy a pre-built automation in seconds.</p>
        </div>
      </div>

      {loading ? (
        <div className="page-loading" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div> Loading templates…
        </div>
      ) : (
        <div className="tpl-grid">
          {templates.map((tpl) => (
            <div className="tpl-card" key={tpl.id}>
              <span className={`tpl-tag ${TAG_CLASS[tpl.tag] || "tt-new"}`}>
                {TAG_LABEL[tpl.tag] || tpl.tag}
              </span>
              <h4>{tpl.name}</h4>
              <p>{tpl.description}</p>
              <div className="tpl-nodes">
                {tpl.nodes.map((node) => (
                  <span className="tpl-node" key={node}>
                    {node}
                  </span>
                ))}
              </div>
              <button
                className="tpl-use-btn"
                disabled={usingId === tpl.id}
                onClick={() => handleUse(tpl.id)}
              >
                {usingId === tpl.id ? "Adding…" : "Use this template"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
