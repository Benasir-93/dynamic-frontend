import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const PDFDocument = ({ portfolioData }) => {

  console.log('portfolioData:', portfolioData);

  if (!portfolioData) {
    return null; // or render a placeholder, throw an error, or handle it in another way
  }

return(
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Hi! I'm {portfolioData.name}</Text>
        <Text style={styles.title}>I'm a passionate {portfolioData.headerTitle}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>About Me:</Text>
        <Text style={styles.skills}>{portfolioData.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills:</Text>
        <Text style={styles.skills}>{portfolioData.skills}</Text>
        <Text style={styles.heading}>Resume link:</Text>
        <Text style={styles.skills}>{portfolioData.resumeLink}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>My Projects:</Text>
        <View style={styles.project}>
          <Text style={styles.projectTitle}>{portfolioData.project1}</Text>
          <Text style={styles.skills}>{portfolioData.descriptionWithUr1}</Text>
        </View>
        <View style={styles.project}>
          <Text style={styles.projectTitle}>{portfolioData.project2}</Text>
          <Text style={styles.skills}>{portfolioData.descriptionWithUr2}</Text>
        </View>
      </View>

<View style={styles.section}>
  <Text style={styles.heading}>My Experience</Text>
  <View style={styles.experienceItemContainer}>
    <Text style={styles.label}>Company Name:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.companyName}</Text>
  </View>
  <View style={styles.experienceItemContainer}>
    <Text style={styles.label}>Experience:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.exp}</Text>
  </View>
  <View style={styles.experienceItemContainer}>
    <Text style={styles.label}>Start Date:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.start}</Text>
  </View>
  <View style={styles.experienceItemContainer}>
    <Text style={styles.label}>End Date:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.end}</Text>
  </View>
  <View style={styles.experienceItemContainer}>
    <Text style={styles.label}>Currently Working:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.currentlyWorking}</Text>
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.heading}>Contact:</Text>
  <View style={styles.contactItemContainer}>
    <Text style={styles.label}>Github Link:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.githubLinks}</Text>
  </View>  
  <View style={styles.contactItemContainer}>
    <Text style={styles.label}>LinkedIn Link:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.linkedinLinks}</Text>
  </View>
  <View style={styles.contactItemContainer}>
    <Text style={styles.label}>Email Id:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.email}</Text>
  </View>
  <View style={styles.contactItemContainer}>
    <Text style={styles.label}>Phone No:</Text>
    <Text style={styles.dynamicContent}>{portfolioData.phoneNo}</Text>
  </View>
</View>
    </Page>
  </Document>
)};

// Define styles for the PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#160b47', 
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555', 
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db', 
  },
  skills: {
    color: '#555',
  },
  link: {
    marginTop: 5,
  },
  linkText: {
    color: '#1abc9c', 
    textDecoration: 'none',
  },
  project: {
    marginBottom: 30,
  },
  projectTitle: {
    fontWeight: 'bold',
    color: '#212d63', 
  },
   contactItemContainer: {
    marginBottom: 5, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  experienceItemContainer: {
    marginBottom: 5, 
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  label: {
    marginRight: 5, 
    color: '#3498db', 
    fontWeight: 'bold',
  },
  dynamicContent: {
    flex: 1,
    color: '#555', 
    textAlign: 'justify',
  },
});

const ExportToPDF = ({ portfolioData }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '800px' }}>
      <PDFDocument portfolioData={portfolioData} />
    </PDFViewer>
  );
};

export default ExportToPDF;
