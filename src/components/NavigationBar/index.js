import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css'

function NavigationBar() {
    return (
        <>
            <Nav className="navigation-bar" activeKey="/home">

                <Nav.Item>
                    <Nav.Link eventKey="link-1">Quem somos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Todos os Livros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Lançamentos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Mais Vendidos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Fale Conosco</Nav.Link>
                </Nav.Item>
            </Nav>
           
        </>
    );
}

export default NavigationBar;