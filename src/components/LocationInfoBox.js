const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Informacje o lokacji</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Tytul: <strong>{info.title}</strong></li>
                <li>Data: <strong>{info.date}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
