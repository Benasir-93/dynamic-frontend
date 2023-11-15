import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExportToPDF from './ExportToPdf';
import axios from 'axios';

const ExportPDF = () => {
  const { portfolioId } = useParams();
  const [fetchedPortfolioData, setFetchedPortfolioData] = useState(null);

  useEffect(() => {
    // Fetch portfolio data using the portfolioId
    axios.get(`http://localhost:8080/api/portfolio/portfolio/${portfolioId}`)
      .then((response) => {
        setFetchedPortfolioData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  }, [portfolioId]);

  if (!fetchedPortfolioData) {
    return null; // or render a placeholder, throw an error, or handle it in another way
  }

  return <ExportToPDF portfolioData={fetchedPortfolioData} />;
};

export default ExportPDF;
