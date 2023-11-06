// import React from 'react';

// const PortfolioView = ({ formData }) => {
//   return (
//     <div className="text-dark mx-auto bg-light w-75 mt-5 mb-5">
//       <h2 className="p-3">Portfolio Data</h2>

//       {/* Render the form data in a visually appealing way */}
//       <div>
//         <p><strong>Name:</strong> {formData.name}</p>
//         <p><strong>Header:</strong> {formData.header}</p>
//         <p><strong>About:</strong> {formData.about}</p>
//         <p><strong>Resume URL:</strong> {formData.resume}</p>
//         {/* Render other form fields here */}
//       </div>
//     </div>
//   );
// };

// export default PortfolioView;
// ------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { PDFViewer, Document, Page, Text, View, PDFDownloadLink } from '@react-pdf-viewer/react-pdf';
// import Axios from 'axios';

// const PortfolioView = ({ formData }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({ ...formData });

//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

//   const togglePDFGeneration = () => {
//     setIsGeneratingPDF(!isGeneratingPDF);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSaveEdit = () => {
//     // Send a PUT request to update the data
//     Axios.put(`/api/update-portfolio/${formData.id}`, editedData)
//       .then((response) => {
//         // Handle the success, update state, or perform other actions
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         // Handle errors
//       });
//   };

//   const handleDelete = () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this portfolio entry?');

//     if (confirmDelete) {
//       // Send a DELETE request to delete the data
//       Axios.delete(`/api/delete-portfolio/${formData.id}`)
//         .then((response) => {
//           // Handle the success, navigate or perform other actions
//         })
//         .catch((error) => {
//           // Handle errors
//         });
//     }
//   };

//   const pdfContent = (
//     <Document>
//       <Page size="A4">
//         <View>
//           <Text>
//             <strong>Name:</strong> {formData.name}
//           </Text>
//           <Text>
//             <strong>Header:</strong> {formData.header}
//           </Text>
//           <Text>
//             <strong>About:</strong> {formData.about}
//           </Text>
//           <Text>
//             <strong>Resume URL:</strong> {formData.resume}
//           </Text>
//           {/* Render other form fields here */}
//         </View>
//       </Page>
//     </Document>
//   );

//   return (
//     <div className="text-dark mx-auto bg-light w-75 mt-5 mb-5">
//       <h2 className="p-3">Portfolio Data</h2>

//       {isEditing ? (
//         // Render an edit form with input fields for each data field
//         <div>
//           <input
//             type="text"
//             value={editedData.name}
//             onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
//           />
//           {/* Render input fields for other data fields here */}
//           <button onClick={handleSaveEdit}>Save</button>
//         </div>
//       ) : (
//         // Display the data
//         <div>
//           <p><strong>Name:</strong> {formData.name}</p>
//           <p><strong>Header:</strong> {formData.header}</p>
//           <p><strong>About:</strong> {formData.about}</p>
//           <p><strong>Resume URL:</strong> {formData.resume}</p>
//           {/* Render other form fields here */}
//         </div>)
//       }

//       <div>
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={handleDelete}>Delete</button>
//         <button onClick={togglePDFGeneration}>
//           {isGeneratingPDF ? 'Close PDF' : 'Export to PDF'}
//         </button>
//       </div>

//       {isGeneratingPDF && (
//         <PDFViewer width={600} height={800}>
//           {pdfContent}
//         </PDFViewer>
//       )}

//       {isGeneratingPDF && (
//         <PDFDownloadLink document={pdfContent} fileName="portfolio.pdf">
//           {({ blob, url, loading, error }) =>
//             loading ? 'Loading document...' : 'Download PDF'
//           }
//         </PDFDownloadLink>
//       )}
//     </div>
//   );
// };

// export default PortfolioView;

import React, { useState } from 'react';
import Axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PortfolioView = ({ formData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...formData });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const togglePDFGeneration = () => {
    setIsGeneratingPDF(!isGeneratingPDF);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Send a PUT request to update the data
    Axios.put(`/api/update-portfolio/${formData.id}`, editedData)
      .then((response) => {
        // Handle the success, update state, or perform other actions
        setIsEditing(false);
      })
      .catch((error) => {
        // Handle errors
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this portfolio entry?');

    if (confirmDelete) {
      // Send a DELETE request to delete the data
      Axios.delete(`/api/delete-portfolio/${formData.id}`)
        .then((response) => {
          // Handle the success, navigate or perform other actions
        })
        .catch((error) => {
          // Handle errors
        });
    }
  };

  const pdfContent = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>
          Name: {formData.name}
        </Text>
        <Text style={styles.text}>
          Header: {formData.header}
        </Text>
        <Text style={styles.text}>
          About: {formData.about}
        </Text>
        <Text style={styles.text}>
          Resume URL: {formData.resume}
        </Text>
        {/* Render other form fields here */}
      </Page>
    </Document>
  );

  return (
    <div className="text-dark mx-auto bg-light w-75 mt-5 mb-5">
      <h2 className="p-3">Portfolio Data</h2>

      {isEditing ? (
        // Render an edit form with input fields for each data field
        <div>
          <input
            type="text"
            value={editedData.name}
            onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
          />
          {/* Render input fields for other data fields here */}
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        // Display the data
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Header:</strong> {formData.header}</p>
          <p><strong>About:</strong> {formData.about}</p>
          <p><strong>Resume URL:</strong> {formData.resume}</p>
          {/* Render other form fields here */}
        </div>
      )}

      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={togglePDFGeneration}>
          {isGeneratingPDF ? 'Close PDF' : 'Export to PDF'}
        </button>
      </div>

      {isGeneratingPDF && (
        <PDFViewer width={600} height={800}>
          {pdfContent}
        </PDFViewer>
      )}
    </div>
  );
};

export default PortfolioView;

