import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import Formulario from "../components/Formulario.jsx";

describe('Formulario', () => {
    let header;
    let img;
    let txtName;
    let txtAge;
    let button;

    beforeEach(() => {
        render(<Formulario />);
        header = screen.getByRole('heading', {level:2});
        img = screen.getByRole('img');
        txtAge = screen.getByLabelText("Edad");
        txtName = screen.getByLabelText("Nombre");
        button = screen.getByRole('button', {name : 'Enviar'});

    })

    it('el botón se encuentra en el documento', () => {
        expect(button).toBeInTheDocument();
    })

    it('la cabecera se encuentra en el documento', () => {
        expect(header).toBeInTheDocument()
    })


    it('la imagen se encuentra en el documento', () => {
        expect(img).toBeInTheDocument()
    })

    it('el texto para el nombre se encuentra en el documento', () => {
        expect(txtName).toBeInTheDocument()
    })

    it('el texto para la edad se encuentra en el documento', () => {
        expect(txtAge).toBeInTheDocument()
    })


    it('comprobar que cuando el usuario rellenar el formulario aparece una cabecera de nivel 6 en el formulario', async () => {
        const user = userEvent.setup();
        await user.type(txtName, 'Laura');
        await user.type(txtAge, '21');
        await user.click(button);
        expect(header).toBeInTheDocument(<h6></h6>)
    })
})