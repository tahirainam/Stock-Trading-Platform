import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === "user" && password === "user") {
        window.location.href = "http://localhost:3000";
      } else {
        setError("Invalid credentials. Please use the demo credentials shown above.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex p-0">

      {/* LEFT PANEL */}
      <div
        className="d-none d-md-flex flex-column justify-content-between p-5 text-white"
        style={{ backgroundColor: "#387ed1", flex: 1 }}
      >
        <div className="mt-10">
          <h1 className="fw-bold display-5 mb-3">Invest in everything</h1>
          <p className="fs-5 opacity-75">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <div className="d-flex gap-5 mt-5">
            <div>
              <div className="fw-bold fs-4">1.5 Cr+</div>
              <div className="opacity-75 small">Registered users</div>
            </div>
            <div>
              <div className="fw-bold fs-4">₹4500 Cr+</div>
              <div className="opacity-75 small">Revenue (FY23)</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="d-flex align-items-center justify-content-center bg-white p-4"
        style={{ width: "100%", maxWidth: "460px" }}
      >
        <div className="w-100" style={{ maxWidth: "360px" }}>

          {/* Mobile brand */}
          <h4 className="fw-bold d-md-none mb-4 text-center" style={{ color: "#387ed1" }}>
            Zerodha
          </h4>

          {/* Demo credentials banner */}
          <div className="alert alert-info d-flex align-items-start gap-2 py-2 px-3 mb-4" role="alert">
            <span className="mt-1">ℹ️</span>
            <div>
              <strong className="d-block mb-1">Demo Mode</strong>
              <span className="small">
                Use <code>user</code> / <code>user</code> to log in
              </span>
            </div>
          </div>

          <h4 className="fw-bold mb-1">Login to Zerodha</h4>
          <p className="text-muted small mb-4">Enter your credentials to continue</p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-medium small">
                User ID / Client ID
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="e.g. user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium small">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="e.g. user"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger py-2 small" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn w-100 text-white fw-semibold mt-1"
              style={{ backgroundColor: "#387ed1" }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center text-muted mt-3" style={{ fontSize: "12px" }}>
            Demo credentials: <code>user</code> / <code>user</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;