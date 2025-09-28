import '../styles/nav.css'

export function Nav() {
    return (
        <nav>
            <div className="nav-header d-flex justify-space-between align-center">
            <h1>
                Resume Creator
            </h1>
            <div>
                <button className="download-btn">Download</button>
            </div>
            </div>
        </nav>
    )
}