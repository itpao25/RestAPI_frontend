
interface Person {
    firstName: string,
    lastName: string
}

interface Props {
    text: string
    persona: Person
}

export const Header: React.FC<Props> = () => {
    return (
        <nav className="navbar bg-light mb-4">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </div>
        </nav>
    );
}