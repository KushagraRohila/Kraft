import { useState } from "react";

const styles = {
  page: {
    background: "#f5f6fa",
    minHeight: "100vh",
    padding: "16px",
  },
  container: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "4px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "22px",
  },
  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "8px",
    display: "block",
  },
  checkboxRow: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  card: {
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    fontSize: "14px",
  },
  activeCard: {
    border: "1.5px solid #6c5ce7",
    background: "#f1edff",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "100px",
    fontSize: "14px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
  locBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#fff",
    marginBottom: "8px",
    cursor: "pointer",
  },
  submit: {
    width: "100%",
    padding: "14px",
    borderRadius: "24px",
    border: "none",
    background: "#6c5ce7",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
  note: {
    textAlign: "center",
    fontSize: "12px",
    color: "#777",
    marginTop: "8px",
  },
};

const INCIDENTS = [
  "Street Harassment",
  "Stalking",
  "Physical Assault",
  "Theft / Robbery",
  "Domestic Violence",
  "Cyber Harassment",
  "Other",
];

const SEVERITY = ["Low", "Medium", "High", "Critical"];

export default function ReportIncident() {
  const [incident, setIncident] = useState("");
  const [severity, setSeverity] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`);
    });
  };

  const submitReport = () => {
    if (!incident || !severity) {
      alert("Please select incident type and severity");
      return;
    }

    const payload = {
      anonymous,
      incident,
      severity,
      location,
    };

    console.log("REPORT:", payload);
    alert("Incident reported successfully");
  };

  return (
    <div style={styles.page}>
      {/* Add your Navbar above this */}
      {/* <Navbar /> */}

      <div style={styles.container}>
        <div style={styles.title}>Report an Incident</div>
        <div style={styles.subtitle}>
          Your report is safe and confidential
        </div>

        {/* Anonymous */}
        <div style={styles.section}>
          <div style={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
            <span>Report Anonymously</span>
          </div>
        </div>

        {/* Incident Type */}
        <div style={styles.section}>
          <label style={styles.label}>Type of Incident</label>
          {INCIDENTS.map((item) => (
            <div
              key={item}
              style={{
                ...styles.card,
                ...(incident === item ? styles.activeCard : {}),
              }}
              onClick={() => setIncident(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={styles.section}>
          <label style={styles.label}>Description</label>
          <input style={styles.input} placeholder="Short title (optional)" />
          <textarea
            style={styles.textarea}
            placeholder="Describe what happened"
          />
        </div>

        {/* Location */}
        <div style={styles.section}>
          <label style={styles.label}>Location</label>
          <button style={styles.locBtn} onClick={getLocation}>
            Use Current Location
          </button>
          <input
            style={styles.input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>

        {/* Date & Time */}
        <div style={styles.section}>
          <label style={styles.label}>Date & Time</label>
          <div style={styles.row}>
            <input type="date" style={styles.input} />
            <input type="time" style={styles.input} />
          </div>
        </div>

        {/* Severity */}
        <div style={styles.section}>
          <label style={styles.label}>Severity</label>
          {SEVERITY.map((item) => (
            <div
              key={item}
              style={{
                ...styles.card,
                ...(severity === item ? styles.activeCard : {}),
              }}
              onClick={() => setSeverity(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Evidence */}
        <div style={styles.section}>
          <label style={styles.label}>Upload Evidence (optional)</label>
          <input type="file" />
        </div>

        {/* Submit */}
        <button style={styles.submit} onClick={submitReport}>
          Submit Report
        </button>
        <div style={styles.note}>Your safety comes first</div>
      </div>
    </div>
  );
}