function ResourcePage() {
  const [selectedResource, setSelectedResource] = React.useState(null);

  const resources = [
    { 
      id: 1, 
      title: 'Self Managed Abortions', 
      image: 'https://via.placeholder.com/150', 
      info: 'Self-managed abortion involves using medications or other methods to end a pregnancy outside of a clinical setting. It\'s important to understand the legal, medical, and safety considerations.' 
    },
    { 
      id: 2, 
      title: 'Crisis Pregnancy Centers\n(Fake Clinics)', 
      image: 'https://via.placeholder.com/150', 
      info: 'Crisis Pregnancy Centers (CPCs) often appear to offer comprehensive reproductive health services but may provide misleading or biased information designed to discourage abortion.' 
    },
    { 
      id: 3, 
      title: 'Non-Pregnancy Related Assistance', 
      image: 'https://via.placeholder.com/150', 
      info: 'Various support services are available for individuals seeking help beyond pregnancy-related issues, including mental health, financial assistance, and personal support.' 
    },
    { 
      id: 4, 
      title: 'Link to Art and LIGT Page', 
      image: 'https://via.placeholder.com/150', 
      info: 'Art and LIGT (Lived In Grace Trust) provide resources, support, and community for individuals navigating reproductive health challenges.' 
    }
  ];

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const closePopup = () => {
    setSelectedResource(null);
  };

  return (
    <>
      <h1>Resource Page</h1>
      <div className="image-grid">
        {resources.map((resource) => (
          <div 
            key={resource.id} 
            className="image-card"
            onClick={() => handleResourceClick(resource)}
          >
            <img src={resource.image} alt={resource.title} />
            <div className="overlay">
              <p>{resource.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedResource && (
        <>
          <div className="info-popup-overlay" onClick={closePopup}></div>
          <div className="info-popup">
            <h2>{selectedResource.title}</h2>
            <p>{selectedResource.info}</p>
            <button 
              onClick={closePopup}
              style={{
                marginTop: '15px', 
                padding: '10px 15px', 
                backgroundColor: '#FF9C51', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}

ReactDOM.render(<ResourcePage />, document.getElementById('root'));