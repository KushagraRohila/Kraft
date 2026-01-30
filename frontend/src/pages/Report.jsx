// import { useState } from "react";

// const styles = {
//   page: {
//     background: "#f5f6fa",
//     minHeight: "100vh",
//     padding: "16px",
//   },
//   container: {
//     maxWidth: "420px",
//     margin: "0 auto",
//     background: "#fff",
//     borderRadius: "12px",
//     padding: "20px",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "600",
//     marginBottom: "4px",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "20px",
//   },
//   section: {
//     marginBottom: "22px",
//   },
//   label: {
//     fontWeight: "600",
//     fontSize: "14px",
//     marginBottom: "8px",
//     display: "block",
//   },
//   checkboxRow: {
//     display: "flex",
//     gap: "8px",
//     alignItems: "center",
//   },
//   card: {
//     padding: "14px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     marginBottom: "10px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   activeCard: {
//     border: "1.5px solid #6c5ce7",
//     background: "#f1edff",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "10px",
//     fontSize: "14px",
//   },
//   textarea: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     minHeight: "100px",
//     fontSize: "14px",
//   },
//   row: {
//     display: "flex",
//     gap: "10px",
//   },
//   locBtn: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     background: "#fff",
//     marginBottom: "8px",
//     cursor: "pointer",
//   },
//   submit: {
//     width: "100%",
//     padding: "14px",
//     borderRadius: "24px",
//     border: "none",
//     background: "#6c5ce7",
//     color: "#fff",
//     fontSize: "15px",
//     cursor: "pointer",
//   },
//   note: {
//     textAlign: "center",
//     fontSize: "12px",
//     color: "#777",
//     marginTop: "8px",
//   },
// };

// const INCIDENTS = [
//   "Street Harassment",
//   "Stalking",
//   "Physical Assault",
//   "Theft / Robbery",
//   "Domestic Violence",
//   "Cyber Harassment",
//   "Other",
// ];

// const SEVERITY = ["Low", "Medium", "High", "Critical"];

// export default function ReportIncident() {
//   const [incident, setIncident] = useState("");
//   const [severity, setSeverity] = useState("");
//   const [anonymous, setAnonymous] = useState(false);
//   const [location, setLocation] = useState("");

//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`);
//     });
//   };

//   const submitReport = () => {
//     if (!incident || !severity) {
//       alert("Please select incident type and severity");
//       return;
//     }

//     const payload = {
//       anonymous,
//       incident,
//       severity,
//       location,
//     };

//     console.log("REPORT:", payload);
//     alert("Incident reported successfully");
//   };

//   return (
//     <div style={styles.page}>
//       {/* Add your Navbar above this */}
//       {/* <Navbar /> */}

//       <div style={styles.container}>
//         <div style={styles.title}>Report an Incident</div>
//         <div style={styles.subtitle}>
//           Your report is safe and confidential
//         </div>

//         {/* Anonymous */}
//         <div style={styles.section}>
//           <div style={styles.checkboxRow}>
//             <input
//               type="checkbox"
//               checked={anonymous}
//               onChange={(e) => setAnonymous(e.target.checked)}
//             />
//             <span>Report Anonymously</span>
//           </div>
//         </div>

//         {/* Incident Type */}
//         <div style={styles.section}>
//           <label style={styles.label}>Type of Incident</label>
//           {INCIDENTS.map((item) => (
//             <div
//               key={item}
//               style={{
//                 ...styles.card,
//                 ...(incident === item ? styles.activeCard : {}),
//               }}
//               onClick={() => setIncident(item)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Description */}
//         <div style={styles.section}>
//           <label style={styles.label}>Description</label>
//           <input style={styles.input} placeholder="Short title (optional)" />
//           <textarea
//             style={styles.textarea}
//             placeholder="Describe what happened"
//           />
//         </div>

//         {/* Location */}
//         <div style={styles.section}>
//           <label style={styles.label}>Location</label>
//           <button style={styles.locBtn} onClick={getLocation}>
//             Use Current Location
//           </button>
//           <input
//             style={styles.input}
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             placeholder="Enter location"
//           />
//         </div>

//         {/* Date & Time */}
//         <div style={styles.section}>
//           <label style={styles.label}>Date & Time</label>
//           <div style={styles.row}>
//             <input type="date" style={styles.input} />
//             <input type="time" style={styles.input} />
//           </div>
//         </div>

//         {/* Severity */}
//         <div style={styles.section}>
//           <label style={styles.label}>Severity</label>
//           {SEVERITY.map((item) => (
//             <div
//               key={item}
//               style={{
//                 ...styles.card,
//                 ...(severity === item ? styles.activeCard : {}),
//               }}
//               onClick={() => setSeverity(item)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Evidence */}
//         <div style={styles.section}>
//           <label style={styles.label}>Upload Evidence (optional)</label>
//           <input type="file" />
//         </div>

//         {/* Submit */}
//         <button style={styles.submit} onClick={submitReport}>
//           Submit Report
//         </button>
//         <div style={styles.note}>Your safety comes first</div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function Report() {
  const [incident, setIncident] = useState("");
  const [severity, setSeverity] = useState("");
  const [location, setLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [file, setFile] = useState(null);

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

  /* ---------------- LOCATION ---------------- */
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(4);
        const lng = pos.coords.longitude.toFixed(4);
        setLocation(`${lat}, ${lng}`);
        setLoadingLocation(false);
      },
      () => {
        alert("Permission denied");
        setLoadingLocation(false);
      }
    );
  };

  /* ---------------- FILE ---------------- */
  const handleDrop = (e) => {
    e.preventDefault();
    const uploaded = e.dataTransfer.files[0];
    if (uploaded) setFile(uploaded);
  };

  const handleFile = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded) setFile(uploaded);
  };

  /* ---------------- SUBMIT ---------------- */
  const submitReport = () => {
    if (!incident || !severity) {
      alert("Select incident and severity");
      return;
    }

    const payload = {
      incident,
      severity,
      location,
      evidence: file?.name || "None",
    };

    console.log("REPORT:", payload);
    alert("Report Submitted Successfully!");

    // RESET FORM (smooth UX)
    setIncident("");
    setSeverity("");
    setLocation("");
    setFile(null);
  };

  return (
    <div className="bg-purple-50 min-h-screen py-10 px-4">
      {/* HEADER */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl">
          !
        </div>
        <h1 className="text-3xl font-bold text-gray-800">
          Report an Incident
        </h1>
        <p className="text-gray-500 mt-2">
          Your safety matters. Report safely and securely.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* INCIDENT TYPE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Type of Incident *</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {INCIDENTS.map((item) => (
              <div
                key={item}
                onClick={() => setIncident(item)}
                className={`border rounded-lg p-4 text-center cursor-pointer transition
                ${
                  incident === item
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-400"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Location *</h2>

          <button
            onClick={getLocation}
            className="border px-4 py-2 rounded-lg mb-3 hover:bg-gray-100"
          >
            {loadingLocation ? "Fetching..." : "Use Current Location"}
          </button>

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:border-purple-500"
            placeholder="Enter address"
          />
        </div>

        {/* SEVERITY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Severity Level</h2>
          <div className="grid grid-cols-2 gap-4">
            {SEVERITY.map((item) => (
              <div
                key={item}
                onClick={() => setSeverity(item)}
                className={`border rounded-lg p-4 text-center cursor-pointer transition
                ${
                  severity === item
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-400"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* EVIDENCE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Evidence (Optional)</h2>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-dashed border-2 rounded-lg p-10 text-center text-gray-400 cursor-pointer hover:bg-gray-50"
          >
            <input
              type="file"
              onChange={handleFile}
              className="hidden"
              id="fileUpload"
            />

            <label htmlFor="fileUpload" className="cursor-pointer">
              {file ? (
                <span className="text-green-600 font-semibold">
                  {file.name}
                </span>
              ) : (
                "Click or Drag Image Here"
              )}
            </label>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          onClick={submitReport}
          className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:opacity-90 transition"
        >
          Submit Report
        </button>

        <p className="text-center text-sm text-gray-500">
          Your report is encrypted and confidential
        </p>
      </div>
    </div>
  );
}
