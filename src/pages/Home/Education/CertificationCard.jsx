function CertificationCard(props) {

    const handleOnClick = () => {
        
    }
    return (
        <div className="certification-card" onClick={() => {window.open(props.certification.url, "_blank")}}>
            <div className="education-card-title">{props.certification.title}</div>
            <img src="/GoogleAIEssentialCertificate.png"></img>
        </div>
    )

}

export default CertificationCard