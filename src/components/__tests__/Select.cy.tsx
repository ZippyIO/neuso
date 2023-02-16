import Select from '../Select';

describe('<Select />', () => {
    it('renders', () => {
        const values = ['Apple', 'Orange', 'Banana'];
        const selectedValues = [''];
        const handleSelectTag = () => null;

        cy.mount(
            <Select
                options={values}
                selectedValues={selectedValues}
                handleValueChange={handleSelectTag}
            />,
        );

        cy.get('button[data-state=closed]').should('exist');
    });

    it('opens select menu', () => {
        const values = ['Apple', 'Orange', 'Banana'];
        const selectedValues = [''];
        const handleSelectTag = () => null;

        cy.mount(
            <Select
                options={values}
                selectedValues={selectedValues}
                handleValueChange={handleSelectTag}
            />,
        );

        cy.get('button[data-state=closed]').click();

        cy.get('div[role=presentation]').should('exist');
    });

    it('opens and closes select menu', () => {
        const values = ['Apple', 'Orange', 'Banana'];
        const selectedValues = [''];
        const handleSelectTag = () => null;

        cy.mount(
            <Select
                options={values}
                selectedValues={selectedValues}
                handleValueChange={handleSelectTag}
            />,
        );

        cy.get('button[data-state=closed]').click();
        cy.get('div[role=presentation]').should('exist');
        cy.get('body').click({ force: true });
        cy.get('div[role=presentation]').should('not.exist');
    });

    it('renders prop values', () => {
        const values = ['Apple', 'Orange', 'Banana'];
        const selectedValues = [''];
        const handleSelectTag = () => null;

        cy.mount(
            <Select
                options={values}
                selectedValues={selectedValues}
                handleValueChange={handleSelectTag}
            />,
        );
        cy.get('button[data-state=closed]').click();
        cy.get('div[role=option]').should('have.length', 3);
        cy.get('div[data-radix-collection-item]')
            .eq(0)
            .should('have.text', 'Apple');
        cy.get('div[data-radix-collection-item]')
            .eq(1)
            .should('have.text', 'Orange');
        cy.get('div[data-radix-collection-item]')
            .eq(2)
            .should('have.text', 'Banana');
    });

    it('selects an option', () => {
        const values = ['Apple', 'Orange', 'Banana'];
        const selectedValues = [''];
        const handleSelectTag = (value: string) => {
            selectedValues.push(value);
        };

        cy.mount(
            <Select
                options={values}
                selectedValues={selectedValues}
                handleValueChange={handleSelectTag}
            />,
        );

        cy.get('button[data-state=closed]').click();
        cy.get('div[data-radix-collection-item]').eq(0).click();

        cy.get('button[data-state=closed]').click();

        cy.get('div[data-radix-collection-item]')
            .eq(0)
            .should('have.attr', 'data-state', 'checked');
    });
});
