import { User } from 'firebase/auth';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Dropdown from '../Dropdown';

describe('<Dropdown />', () => {
    it('renders', () => {
        cy.mount(
            <BrowserRouter>
                <Dropdown />
            </BrowserRouter>,
        );

        cy.get('button[data-state=closed]').should('exist');
        cy.get('[role=menu]').should('not.exist');
    });

    it('opens dropdown menu', () => {
        cy.mount(
            <BrowserRouter>
                <Dropdown />
            </BrowserRouter>,
        );

        cy.findByRole('button').click();

        cy.get('[role=menu]').should('exist');
    });

    it('opens then closes dropdown menu', () => {
        cy.mount(
            <BrowserRouter>
                <Dropdown />
            </BrowserRouter>,
        );

        cy.findByRole('button').click();
        cy.get('[role=menu]').should('exist');
        cy.findByRole('button').click();
        cy.get('[role=menu]').should('not.exist');
    });

    it('displays users name', () => {
        const user = {
            displayName: 'Harry Bosch',
        } as User;
        const loaded = true;

        cy.mount(
            <AuthContext.Provider value={{ user, loaded }}>
                <BrowserRouter>
                    <Dropdown />
                </BrowserRouter>
            </AuthContext.Provider>,
        );
        cy.findByRole('button').click();

        cy.findByText('Harry Bosch').should('exist');
    });

    it('displays empty name', () => {
        const user = {
            displayName: '',
        } as User;
        const loaded = true;

        cy.mount(
            <AuthContext.Provider value={{ user, loaded }}>
                <BrowserRouter>
                    <Dropdown />
                </BrowserRouter>
            </AuthContext.Provider>,
        );
        cy.findByRole('button').click();

        cy.get('[role=menuitem]').first().should('have.text', '');
    });
});
