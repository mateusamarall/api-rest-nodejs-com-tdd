describe('Principais assertivas do jest', () => {
  it('deverá retornar number como null', () => {
    const number = null;

    expect(number).toBeNull();
  });

  it('Deverá saber trabalhar com objetos', () => {
    const obj = { name: 'Mateus', email: 'mateus.amaral018@gmail.com' };
    expect(obj).toHaveProperty('name', 'Mateus');
    expect(obj.email).toBe('mateus.amaral018@gmail.com');

    const obj2 = { name: 'Mateus', email: 'mateus.amaral018@gmail.com' };
    expect(obj).toEqual(obj2);
  });
});
