import "./homePage.css"
function Homepage(){
    return (
    <div className ="home-container">
      {/*Hero section */}
      <section className="hero-section">
        <h2 className="home-heading">Welcome to the Legal Case Law System</h2>
        <p className="home-para">
          <span className="highlight">Powered by AI</span>,our platform allows you to <span className="highlight">quickly find</span> accurate and contextually relevant legal information. <br />
          Whether you're a <strong>lawyer</strong>, <strong>law student</strong>, or <strong>legal seeker</strong>, get landmark judgments and case laws tailored to your queries.
        </p>

        <div className="btn">
          <button className="btn-signup">Signup</button>
          <button className="btn_login">Login</button>
        </div>
      </section>

      {/*Feature section */}
      <section className="feature-section">
        <h3 className="feature-heading">Key Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Search</h3>
            <p>Smart legal case recommendations tailored to your query.</p>
          </div>
          <div className="feature-card">
            <h3>Extensive Database</h3>
            <p>Access landmark judgments and case laws across multiple domains.</p>
          </div>
          <div className="feature-card">
            <h3>User-Friendly Interface</h3>
            <p>Easily search, filter, and browse legal documents.</p>
          </div>
          <div className="feature-card">
            <h3>Up-to-Date Information</h3>
            <p>Always updated with the latest rulings and amendments.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Confidential</h3>
            <p>Your data and queries are safe with us.</p>
          </div>
        </div>
      </section>

      {/*How it works */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <ol className="steps-list">
          <li><strong>Enter Your Query:</strong> Type your legal question or keywords.</li>
          <li><strong>AI Analyzes:</strong> Our AI scans thousands of cases and legal texts.</li>
          <li><strong>Get Results:</strong> View relevant case laws and summaries instantly.</li>
        </ol>
      </section>
    </div>
  );
}

export default Homepage;