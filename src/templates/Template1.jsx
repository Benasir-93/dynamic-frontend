import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
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
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
});

const Template1 = ({ formData }) => {
  return (
    <PDFViewer width={600} height={800}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.text}>{formData.name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Header Title</Text>
            <Text style={styles.text}>{formData.headerTitle}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.text}>{formData.about}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Resume URL</Text>
            <Text style={styles.text}>{formData.resumeLink}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.text}>{formData.skills}</Text>
          </View>
          {/* Add more fields as needed */}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Template1;
