import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un error si no tenemos apiKey', async () => {

        const resp = await getImagen();

        expect(resp).toBe('No se encontró la imagen');

    })
})